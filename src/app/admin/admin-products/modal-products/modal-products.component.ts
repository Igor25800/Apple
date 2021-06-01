import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss']
})
export class ModalProductsComponent implements OnInit {

  isdisabled : boolean

  imgDetali: string

  upload: Observable<number>

  selected = 'option2';

  formGroupDescriptions = new FormGroup({
    title : new FormControl(''),
    descriptions: new FormControl(''),
    imgDetali: new FormControl('')
  })

  constructor(
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }

  addDetali(event):void {

  }

  uploadFil(event) {
    const myId = uuid.v4();
    // this.isdisabled = true
    
   this.formGroupDescriptions.value.img =''
    if(this.imgDetali) {
      this.storage.refFromURL(this.imgDetali).delete()
      this.imgDetali = ''
    }
    const file = event.target.files[0];
    const filePath = `detali/${myId}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.upload = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`detali/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.imgDetali = img
        this.upload.subscribe(res => {
          if(res === 100) {
            this.isdisabled = false
          }
        })
       })
    })
    
  }

}
