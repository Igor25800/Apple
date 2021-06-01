import { Component, OnDestroy, OnInit } from '@angular/core';
import {  animate, animation, state, style, transition, trigger } from '@angular/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/category.interfaces';
import { Category } from 'src/app/shared/models/category.models';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { NavsService } from 'src/app/shared/services/navs/navs.service';
import { filter, takeUntil, takeWhile } from 'rxjs/operators';
import { AppleService } from 'src/app/shared/services/apple/apple.service';





@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
  animations: [

  ]
})

export class AdminCategoryComponent implements OnInit ,OnDestroy {

  uploadProgress:Observable<number>
  categoriImage:string = ''

  categoryDoc
  
  
  panelOpenState = false;
  isdisabled:boolean   = true
  
  arrOpntio: Array<ICategory> = []
  arrCategory  = []

  arrCate

  fillter

  destoy$:Subject<any> = new Subject<any>()
  
  signInForm = new FormGroup({
    title : new FormControl('', Validators.required ),
    select: new FormControl('' ,Validators.required),
    img: new FormControl('')
    
  })
 

  
  constructor(
    private storage: AngularFireStorage,
    private categoryServices: CategoryService,
    private navServices : NavsService ,
    private  appleServices: AppleService
   
  ) { }


  ngOnInit(): void {
    this.getCategory()
     this.categoryServices.arrCategory().pipe(takeUntil(this.destoy$)).subscribe(res => {
      // console.log(res);
      
      this.arrCategory = res
    })
  }
  ngOnDestroy() :void {
    this.destoy$.next()
    this.destoy$.complete()
  }

  getCategory() {
   this.categoryServices.getCategory().then((r)=>{
    //  console.log(r);
     
   });
    
    this.navServices.$arrNav.pipe(filter((d) => d!==null)).subscribe(res => {
    
      this.arrOpntio = res
      this.arrCate = res.map(el => el.nameEN)
      this.fillter = res.map(el => el.nameEN) 
    })
   
  }




  signIn(form:NgForm){
    
   
  }

  add(){
    const category ={ ...new Category(1,this.signInForm.value.title,this.categoriImage, this.signInForm.value.select )}
    console.log(this.categoriImage);
    
    if(this.arrCategory.length > 0) {
      category.id = this.arrCategory.slice(-1)[0].id +1
    }
    
   this.categoryServices.addCategory(category ,`category ${ category.id.toString()}`).then(res=>{
      this.getCategory()
    })

    this.categoriImage = ''
    this.uploadProgress = of(0)
    this.signInForm.reset()
    this.isdisabled = true
   
    
  }
  

  deleteCategory(iteam ){
   this.categoryServices.deleteCategory(iteam.doc).then(()=> {
      this.arrCategory = this.arrCategory.filter((el)=> el.doc !== iteam.doc)
      // this.getCategory()
    })
    this.appleServices.getApple().then(apple => {
      const targetApple = apple.filter(el => el.category.toLowerCase() === iteam.category.toLowerCase() ) 
      const targetProduct = targetApple.filter(el => el.categoryProduct.toLowerCase() === iteam.title.toLowerCase())
      const deleteApple = targetProduct.map(el => {
        this.storage.refFromURL(el.img).delete()
      return  this.appleServices.deleteApple(`apple ${el.id}`)
       })
      forkJoin(deleteApple).subscribe(res => {
        
      })
    })


    if(iteam.img) {
      this.storage.refFromURL(iteam.img).delete()
    }
  
    
  }


  edit(iteam :ICategory){
      // this.signInForm.controls.title.value
      // this.signInForm.get('title')
      
      this.signInForm.patchValue({
        title: iteam.title,
        select: iteam.category        
      });
      this.categoryDoc = iteam
      this.categoriImage = iteam.img;
      this.isdisabled = false

     
      
     
      
  }

  save(signInForm : FormData){
    const body = {
      id: this.categoryDoc.id,
      title: this.signInForm.value.title,
      img: this.categoriImage,
      category: this.signInForm.value.select
    }
    this.categoryServices.updateCategory( this.categoryDoc.doc, body).then(res => {
      this.getCategory();
      this.categoryDoc = null;
      this.categoriImage= null;
   
    })
    this.uploadProgress = of(0)
    
    // this.signInForm.clearValidators()

    this.signInForm.reset()
    
    // signInForm.markAsUntouched()
    // signInForm.markAsPristine()
    // signInForm.updateValueAndValidity()

    // Object.keys(this.signInForm.controls).forEach(el=> {
    //   this.signInForm.controls[el].markAsUntouched()
    //   this.signInForm.controls[el].markAsDirty()
    //   this.signInForm.controls[el].markAsPristine()
    //   this.signInForm.controls[el].clearValidators()
    //   this.signInForm.controls[el].
      
      
    // })
    
    
  
  }


  uploadFile(event) {
    this.isdisabled = true
    
   
    this.signInForm.value.img =''
    if(this.categoriImage) {
      this.storage.refFromURL(this.categoriImage).delete()
      this.categoriImage = ''
    }
    const file = event.target.files[0];
    const filePath = `category/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`category/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.categoriImage = img
        this.uploadProgress.subscribe(res => {
          if(res === 100) {
            this.isdisabled = false
          }
        })
    })
      
  
    })
  }

    uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }


}
