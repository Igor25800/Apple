import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { ICategory } from 'src/app/shared/interfaces/category.interfaces';
import { Apple } from 'src/app/shared/models/apple.models';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { NavsService } from 'src/app/shared/services/navs/navs.service';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import * as uuid from 'uuid';
import { ModalProductsComponent } from './modal-products/modal-products.component';
import { DevicePropertiesComponent } from 'src/app/components/device-properties/device-properties.component';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  uploadProgress: Observable<number>
  signInForm

  isdisabled:boolean 

  idApple:number
  img:string
  iteam 

  dollar

  uuidItem:number

  papa = 'papa'

  arrApple :Array<IApple> = []
  arrOpntio :Array<ICategory> = []

  arrOpntio2
  panelOpenState:boolean
  isText : boolean 

  arrNavigate:Array<INavs>

  selected :string

  countries: any[] = []

  detali

  

  // form = this.formBolider.group({})

  formGroup = this.formBolider.group({
    title: new FormControl('' , Validators.required),
    price: new FormControl('' , Validators.required),
    memory: new FormControl(''),
    color: new FormControl(''),
    img: new FormControl(''),
    selectValue: new FormControl(''),
    dollarPrice: new FormControl(''),
    detalis: new FormControl('')
   })


  constructor(
    private appleServices: AppleService,
    private storage: AngularFireStorage,
    private navServices : NavsService,
    private categoryServices: CategoryService,
    private http: HttpClient,
    private formBolider :FormBuilder,
    public dialog: MatDialog
    
  ){
    
  }

  dynControls = [];

  ngOnInit(){
    this.getApple()
    
    this.navServices.$arrNav.pipe(filter(d=> d!==null)).subscribe(res => {
      this.arrOpntio = res;
      // console.log(res);
      
  
     
    })
    this.categoryServices.getCategory().then(res=> {
      this.arrOpntio2 = res
      // console.log(res, 'option');
    })    
 
    
    
    
   this.getСurrency()
    
  } 

  // addModal(){
  //  const dialogRef = this.dialog.open(DevicePropertiesComponent , {
  //    data : {
  //      form : this.papa
  //    }
  //  } )

  //   dialogRef.afterClosed().subscribe(res => {
  //     if(res != undefined) {
  //     this.countries.push(res);
  //     this.formGroup.addControl(res.control, new FormControl(''))
    
     
      
  //     }
  //   })
  // }

  
  // openDialog() {
  //   const dialogRef = this.dialog.open(ModalProductsComponent);

  
  // }



  
  getСurrency() :void {
    this.appleServices.getСurrency().subscribe(respons => {
      console.log(respons);
      
      this.dollar =  Math.floor(+respons[0].sale)
      
    })
  }

 
  

  getApple() {
    this.appleServices.getApple().then(apple => {
      // console.log(apple);
      
       this.arrApple = apple
      //  console.log(apple, 'aplle');
  })
}




  uploadFile(event) {
    // console.log(this.dollar);
    // console.log('apple ============================');
    this.isdisabled = true
    // console.log('*********',this.img);
    
   this.formGroup.value.img =''
    if(this.img) {
      this.storage.refFromURL(this.img).delete()
      this.img = ''
    }
    const file = event.target.files[0];
    
    const filePath = `apple/${this.uuid()}.${file.type.split('/')[1]}`;
    console.log('apple', filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`apple/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.img = img
        this.uploadProgress.subscribe(res => {
          if(res === 100) {
            this.isdisabled = false
          }
        })
       })
    })
    
  }

    add({category, id}) {
      // this.selected = item.category
      this.selected = category
       
      // const nav: any = this.arrOpntio.find(el => el.id === id);
      // console.log(nav);
      // this.dynControls = [];
      // if(nav.props){
      //     this.dynControls = Object.keys(nav.props);
      //     console.log(this.dynControls);
          
      //     this.dynControls.forEach(item => {
      //     this.formGroup.addControl(item, new FormControl(''))
      //    })
      // }
      // console.log(this.formGroup);
      
    }
  
    addApple(form ) {
    
      
      
      const myId = uuid.v4();
      const apple = {...new Apple(0,myId,1,form.title,form.price,this.img,this.selected,form.selectValue, this.dollar ,form.color,form.memory)}
 
        // console.log(apple);
        
    if(!this.isText){
      
      if(this.arrApple.length > 0) {
        apple.id = this.arrApple.slice(-1)[0].id +1
      }
    
      // console.log(apple);
        
      this.appleServices.addApple(apple, `apple ${apple.id}`).then(res=>{
        this.getApple()
      })
      
     
      
    }

    if(this.isText){
      apple.id = this.idApple
      apple.uuid =  this.uuidItem

      if(this.iteam.comments) {
        const  newApple =  {...apple , detalis: {...this.iteam.detalis} ,description: {...this.iteam.description} , comments : [...this.iteam?.comments] };
        
        
        this.appleServices.updateApple(`apple ${this.iteam.id}` , newApple ).then(() =>{
          this.getApple() 
        })
      } else {
        
        const  newApple =  {...apple , detalis: {...this.iteam.detalis} ,description: {...this.iteam.description} };
   
        this.appleServices.updateApple(`apple ${apple.id}` , newApple ).then(() =>{
          this.getApple() 
        })
      }
      
      
      
   
     
       this.isText = false
    
    }
    this.img = ''
    this.uploadProgress = of(0)
    this.formGroup.reset()
    this.isdisabled = true
  }


  

 


  editApple(iteam:any) :void {
   
    // console.log( iteam.price / +this.dollar );
    // console.log(iteam.price );
    // console.log( +this.dollar );
   console.log(iteam);
   
      
 

    this.idApple = iteam.id
    this.uuidItem = iteam.uuid
    this.isText = true
    
    this.formGroup.patchValue({
      
      title: iteam.title,
      price: iteam.price,
      memory: iteam.memory,
      color: iteam.color,
      selectValue: iteam.categoryProduct,
    
      
    })
    this.iteam = iteam
    this.img = iteam.img;
    
  
   
    
     this.selected = iteam.category
     this.isdisabled = false
    }



  deleteApple(iteam:IApple){
    this.appleServices.deleteApple(`apple ${iteam.id}`).then(()=> {
      this.getApple()
    })
    if(iteam.img) {
      this.storage.refFromURL(iteam.img).delete()
    }
  }


  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }

}
