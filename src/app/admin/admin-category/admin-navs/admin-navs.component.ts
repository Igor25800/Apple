import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, of, Subscription } from 'rxjs';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { Navs } from 'src/app/shared/models/category-navs.models';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { NavsService } from 'src/app/shared/services/navs/navs.service';

@Component({
  selector: 'app-admin-navs',
  templateUrl: './admin-navs.component.html',
  styleUrls: ['./admin-navs.component.scss']
})
export class AdminNavsComponent implements OnInit ,OnDestroy  {

  isbtn:boolean
  panelOpenState = false;

  subscribe: Subscription

  isText:boolean

  arrCategory = []
  idNav:number

  arrNavs: Array<INavs> = []

  formGroup = this.formBolider.group({
    nameEN:  new FormControl('', Validators.required),
    nameUA: new FormControl('' , Validators.required)
  })

 

  constructor(
    private navsServices: NavsService,
    private categoryServices : CategoryService,
    private appleServices: AppleService,
    private storage: AngularFireStorage,
    private formBolider :FormBuilder
  ) { }

  ngOnInit(): void {
    this.subscribe =  this.navsServices.$arrNav.subscribe(res=>{
      this.arrNavs = res
    })
    
  }

  

  
  ngOnDestroy():void {
    this.subscribe.unsubscribe() 
  }



  // getNavs(){
  //   this.navsServices.getNavs().then(res=>{
      
  //     this.navsServices.$arrNav.next(res)
  //     this.arrNavs = res
      
  //   })
 
  // }


  form(form:FormData){

  }

  addNavs(){
    const navs  = {...new Navs(1,this.formGroup.value.nameEN, this.formGroup.value.nameUA ,)}
   
    
    if(!this.isText) {
      if(this.arrNavs.length > 0) {
        navs.id = this.arrNavs.slice(-1)[0].id +1
      }
      this.navsServices.addNavs(navs,`navs ${navs.id}`).then(res=>{
        this.navsServices.getNavs()
      })
    }
    
    if(this.isText) {
      navs.id = this.idNav
      this.navsServices.updateNavs(`navs ${navs.id}` , navs).then(res => {
        this.navsServices.getNavs()
      })
      this.isText = false
    }
    this.formGroup.reset()

  }

  deleteNavs(iteam){
    this.navsServices.deleteNavs(`navs ${iteam.id.toString()}`).then(nav=> {
      this.navsServices.getNavs()

      this.categoryServices.getCategory().then(category => {
         const targetCategory = category.filter(el => el.category.toLowerCase() === iteam.nameEN.toLowerCase() )
          const deleteJoin = targetCategory.map(el => {
            this.storage.refFromURL(el.img).delete()
            return this.categoryServices.deleteCategory(el.doc) 
             
          })
          forkJoin(deleteJoin).subscribe(res => {
           this.categoryServices.getCategory().then(()=> {})
           this.appleServices.getApple().then(apple => {

             const targetApple = apple.filter(el => el.category.toLowerCase() === iteam.nameEN.toLowerCase() )
             const deleteApple = targetApple.map(el => {
               this.storage.refFromURL(el.img).delete()
               return  this.appleServices.deleteApple(`apple ${el.id}`) 
              })
             forkJoin(deleteApple).subscribe(res => {
               
             })
           })
          })
         
          
        })
    })
   
  
   
     
  }

  editNavs(iteam :INavs){
    this.idNav = iteam.id
   
   this.formGroup.patchValue({
      
      nameEN: iteam.nameEN,
      nameUA: iteam.nameUA        
    });
    this.isText = true
  }
}
