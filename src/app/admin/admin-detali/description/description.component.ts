import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { INavs } from 'src/app/shared/interfaces/category-navs.interfaces';
import { IDescription } from 'src/app/shared/interfaces/description.interfaces';
import { Iphone } from 'src/app/shared/interfaces/iphone-interfaces';
import { Description } from 'src/app/shared/models/description,models';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { DescriptionService } from 'src/app/shared/services/description/description.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit  {

  @Input() arrNav : Array<INavs>
  @Input() arrApple : Array<IApple>

  appleArrey

  uploadProgress: Observable<number>

  isText:boolean
  isdisabled:boolean
  uuid: number;

  img:string

  selectedItem: any;

  apple:IApple

  arrDescription : Array<IDescription>

  description = this.formBolider.group({
    title: new FormControl(''),
    textarea : new FormControl(''),
    img: new FormControl('')
  })
  select = this.formBolider.group({
    select: new FormControl(''),
  
  })

  constructor(
    private formBolider :FormBuilder,
    private descServices : DescriptionService,
    private storage: AngularFireStorage,
    private appleServices :AppleService

  ) { }



  ngOnInit(): void {
    
    this.getDescription()
    this.getApple()
    
  }

  getApple():void {
    this.appleServices.getApple().then(res => {
      this.appleArrey = res
    })
  }


  getDescription () :void {
    this.descServices.getDescription().then(res => {
      this.arrDescription = res
    })
  }

  formGroup(value) :void{
    const {select}  =  this.select.value

    
    const  { title , textarea  ,img}   = this.description.value

    const description = {... new Description(this.apple.id, this.apple.uuid,select , title ,textarea, this.img)}
    
    

    const newDescription = {...this.apple , description : {...description}}
  
    
        this.appleServices.updateApple(`apple ${this.apple.id}`,newDescription).then(res => {
            this.getApple()
          })
      
    


    // if(this.selectedItem && this.selectedItem.id) {
    //   const description = {... new Description(this.selectedItem.id, this.selectedItem.uuid,select , title ,textarea, this.img)}
    //     this.descServices.updateDescription(`description ${description.id}`,description).then(res => {
    //         this.getDescription()
    //       })
      
    // } else {
    //   const description = {... new Description(1,this.uuid ,select , title ,textarea , this.img)}

    //   if(this.arrDescription.length > 0) {
    //     description.id = this.arrDescription.slice(-1)[0].id +1
    //   }

    //   this.descServices.addDescription(description, `description ${description.id}`).then(res => {
    //     this.getDescription()
    //   }) 
    // }
    this.isdisabled = true
    
  }

  add(item) :void {
    this.description.reset()
   
    
    this.selectedItem = this.appleArrey.find(el => el.category === item.category && el.uuid === item.uuid) as any
   
    

    this.isText = false
    
    if(this.selectedItem.description) {
    
      this.isText = true
      const {description : {title , description}  } = this.selectedItem   as any;
      this.description.patchValue({ title  , textarea : description   })
      this.img = this.selectedItem.description.img
    
    }


    this.isdisabled = false
    this.img = ''
    this.uploadProgress = of(0)
    this.uuid = item.uuid
    this.apple = item
  }



  uploadFile(event) {
    const myId = uuid.v4();
    // console.log(myId);
    console.log('description ============================');
    
    this.isdisabled = true
    console.log(this.img  , '2');
   this.description.value.img =''
    if(this.img) {
      this.storage.refFromURL(this.img).delete()
      this.img = ''
    }
    const file = event.target.files[0];
    const filePath = `description/${myId}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    console.log( 'dec', filePath );
    
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`description/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.img = img
        this.uploadProgress.subscribe(res => {
          if(res === 100) {
            this.isdisabled = false
          }
        })
       })
    })
    
  }
}
