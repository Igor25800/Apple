import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IGallery } from 'src/app/shared/interfaces/gallery.interfaces';
import { Gallery } from 'src/app/shared/models/gallery.models';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {

  uploadProgress: Observable<number>

  isdisabled:boolean

  img:string

  isText:boolean
  idGallery:number

  arrGallery: Array<IGallery> = []

  formGallery = this.formBolider.group({
    img: new FormControl(''),
    name:new FormControl('',Validators.required)
  })

  constructor(
    private formBolider :FormBuilder,
    private storage: AngularFireStorage,
    private galleryServices: GalleryService
  ) { }

  ngOnInit(): void {
    this.getGallery()
  }

  getGallery():void {
    this.galleryServices.getGallery().then(res => {
      this.arrGallery = res
    })
  }

  addGallery(value):void{
    const gallery = {...new Gallery(0,this.img,value.name)}
 
     
    if(!this.isText){
     
      if(this.arrGallery.length > 0) {
        gallery.id = this.arrGallery.slice(-1)[0].id +1
      }
      
      this.galleryServices.addGallery(gallery, `gallery ${gallery.id}`).then(res=>{
        this.getGallery()
      })
    }

    if(this.isText){
      gallery.id = this.idGallery
      
     
      this.galleryServices.updateGallery(`gallery ${gallery.id}` , gallery).then(() =>{
        this.getGallery() 
      })
      this.isText = false
    
    }
    this.img = ''
    this.uploadProgress = of(0)
    this.formGallery.reset()
    this.isdisabled = true
      
  }


  uploadFile(event) {
    
    const myId = uuid.v4();
    this.isdisabled = true

    
   this.formGallery.value.img =''
    if(this.img) {
      this.storage.refFromURL(this.img).delete()
      this.img = ''
    }
    const file = event.target.files[0];
    
    const filePath = `gallery/${myId}.${file.type.split('/')[1]}`;
    console.log('gallery', filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`gallery/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.img = img
        this.uploadProgress.subscribe(res => {
          if(res === 100) {
            this.isdisabled = false
          }
        })
       })
    })
    
  }

  deleteGallery(item):void {
    this.galleryServices.deleteGallery(`gallery ${item.id}`).then(()=> {
      this.getGallery()
    })
    if(item.img) {
      this.storage.refFromURL(item.img).delete()
    }
  }

  editGallery(item) :void {

    this.idGallery = item.id
    this.isText = true

    this.formGallery.patchValue({name: item.name})

    this.img = item.img;
    this.isdisabled = false
  }
}
