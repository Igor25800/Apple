import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ICarysel } from 'src/app/shared/interfaces/carysel.interfaces';
import { Carysel } from 'src/app/shared/models/carysel.models';
import { CaruselService } from 'src/app/shared/services/carusel/carusel.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-admin-carusel',
  templateUrl: './admin-carusel.component.html',
  styleUrls: ['./admin-carusel.component.scss']
})
export class AdminCaruselComponent implements OnInit {
  uploadProgress: Observable<number>
  isdisabled: boolean;
  img:string
  isText:boolean

  idCarysel:number

  arrCarysel: Array<ICarysel>



  formGroup  = this.formBolider.group({
    img: new FormControl('' ),
    url: new FormControl('',Validators.required)
  })

  constructor(
    private formBolider :FormBuilder,
    private storage: AngularFireStorage,
    private caryselServices : CaruselService
  ) { }

  

  ngOnInit(): void {
    this.loaderCarysel()
  }

  loaderCarysel():void {
    this.caryselServices.getCarysel().then(res => {
      this.arrCarysel= res
      console.log(res);
      
    })
  }

  addCarysel(value):void {
      
      const carysel = {...new Carysel(1,this.img, value.url)}

      if(!this.isText){
        if(this.arrCarysel.length > 0) {
          carysel.id = this.arrCarysel.slice(-1)[0].id +1
        }
        this.caryselServices.addCarysel(carysel, `carysel ${carysel.id}`).then(res=>{
          this.loaderCarysel()
        })
     }
     if(this.isText){
      carysel.id = this.idCarysel
      
     
      this.caryselServices.updateCarysel(`carysel ${carysel.id}` , carysel).then(() =>{
        this.loaderCarysel() 
      })
      this.isText = false
    
    }
    this.img = ''
    this.formGroup.reset()
    this.uploadProgress = of(0)

  }

  uploadFile(event):void {
    const myId = uuid.v4();
     this.isdisabled = true
    
     this.formGroup.value.img = ''
   
     if(this.img) {
       this.storage.refFromURL(this.img).delete()
       this.img = ''
     }
     console.log(event);
     
     const file = event.target.files[0];
     
     const filePath = `carysel/${myId}.${file.type.split('/')[1]}`;
     const task = this.storage.upload(filePath, file);
     this.uploadProgress = task.percentageChanges();
     task.then( result => {
       this.storage.ref(`carysel/${result.metadata.name}`).getDownloadURL().subscribe( img => {
         this.img = img
         this.uploadProgress.subscribe(res => {
           if(res === 100) {
             this.isdisabled = false
           }
         })
        })
     })
    //  this.formGroup.patchValue({img: ''})
  }

  editCarysel(item) {
    this.idCarysel =  item.id
    this.isText = true
     

    this.formGroup.patchValue({
      url : item.url
    })
    this.img = item.img
    

  }

  deleteCarysel(item) {
   

    console.log(item);
    
   
    this.caryselServices.deleteCarysel(`carysel ${item.id}`).then(()=> {
      this.loaderCarysel()
    })
    if(item.img) {
      this.storage.refFromURL(item.img).delete()
    }
  }

}
