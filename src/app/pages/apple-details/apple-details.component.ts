import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core'
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { DetaliService } from 'src/app/shared/services/detali/detali.service';
import { DescriptionService } from 'src/app/shared/services/description/description.service';
import { IDescription } from 'src/app/shared/interfaces/description.interfaces';
import { Comments } from 'src/app/shared/models/comments.models';

@Component({
  selector: 'app-apple-details',
  templateUrl: './apple-details.component.html',
  styleUrls: ['./apple-details.component.scss']
})
export class AppleDetailsComponent implements OnInit {

  favoriteSeason: string;
 
  

  localApple: IApple[] = []


  arrApple: Array<IApple>
  arrColor

  arrDetali
  arrMemory

  apple

  arrDescription : Array<IDescription>

  formGroup = new FormGroup({
    radio: new FormControl('')
  })

  formConnet = new FormGroup({
    name : new FormControl(''),
    textArea: new FormControl('')
  })

  constructor(
    private appleServices: AppleService,
    private route: ActivatedRoute,
    private routerActivate: Router,
    private orderServices: OrderService,
    private detaliServices: DetaliService,
    private descriptionServices : DescriptionService
  ) {
    this.routerActivate.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getApple()
      }
    })
  }

  ngOnInit(): void {
    // this.getApple()
    this.getDescription()
    this.getDetali()
   
    
  }

  getDescription () :void {
    this.descriptionServices.getDescription().then(res => {
      const uuidRouring = this.route.snapshot.paramMap.get('id') 
 
   
      
      this.arrDescription = res.filter(el =>  uuidRouring ===  el.uuid)
      // console.log(this.arrDescription);
      
    })
  } 

  getDetali():void {
  this.detaliServices.getDatali().then(res => {
    const uuidRouring = this.route.snapshot.paramMap.get('id')
    this.arrDetali = res.filter(el => {
      return uuidRouring ===  el.uuid
    })
  
    
  })
}



  getApple(): void {

    const uuidRouring = this.route.snapshot.paramMap.get('id')

    this.appleServices.getApple().then(apple => {
  
      

     this.arrApple = apple.filter(({ id, uuid, categoryProduct, color, memory }) => {
        return uuidRouring === uuid
      })

      this.apple =  this.arrApple.find(el => el)
      // console.log(this.apple);
      
     const newCategoryProduct = this.arrApple.find(el => el.categoryProduct)
      const newColor = this.arrApple.find(el => el.color)
      const newMemory = this.arrApple.find(el => el.memory)


      this.arrColor = apple.filter((category, i, arr) => {
        if (newColor && category.color?.toLowerCase().trim() === newColor.color?.toLowerCase().trim()) {
          return uuidRouring === category.uuid && category.color.toLowerCase().trim() === newColor.color.toLowerCase().trim()
        }
        // console.log(uuidRouring , 'uuid');
        
        return category?.categoryProduct === newCategoryProduct?.categoryProduct && newMemory ? category.memory.toLowerCase().trim() === newMemory.memory.toLowerCase().trim() : category.uuid === uuidRouring
      })
      // console.log(this.arrColor , 'COlor');
      

      console.log(newColor);
      
      this.arrMemory = apple.filter(({ id, uuid, categoryProduct, color, memory }, i, arr) => {
    
        

        if (newMemory && memory?.toLowerCase().trim()=== newMemory.memory?.toLowerCase().trim()) {
          return uuidRouring === uuid && memory.toLowerCase().trim() === newMemory.memory.toLowerCase().trim()
        }
    
      return categoryProduct === newCategoryProduct?.categoryProduct && newColor ? color.toLowerCase().trim() === newColor.color.toLowerCase().trim() : uuid === uuidRouring
      })
      // console.log(this.arrMemory , 'memory');
      
    })

  }
  addProduct(apple: IApple) {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localApple = JSON.parse(localStorage.getItem('basket'));


      if (this.localApple.some(localApple => localApple.id === apple.id)) {
        const index = this.localApple.findIndex(localApple => localApple.id === apple.id)
        this.localApple[index].count += apple.count
      }
      else {
        this.localApple.push(apple)

      }
      localStorage.setItem('basket', JSON.stringify(this.localApple))
    }
    else {
      this.localApple.push(apple)
      localStorage.setItem('basket', JSON.stringify(this.localApple))

    }

    this.orderServices.basket.next(apple)

  }

 
  formAdd(value) :void {
    const {name, textArea} = this.formConnet.value
   
    const comments = {... new Comments(1,this.apple.uuid, name,textArea, new Date().toLocaleString() ) } as any
    
   
    
  
    if(!this.apple.comments) {
      this.apple.comments = []
    }

    if(this.apple.comments.length > 0) {
      comments.id = this.apple.comments.slice(-1)[0].id +1
    }
    this.apple.comments.push(comments)
    
    

    
    this.appleServices.updateApple(`apple ${this.apple.id}` , this.apple ).then(() =>{
      this.getApple() 
    })
    
    this.formConnet.reset()
    
   

   
    // console.log(this.arrr);
    

    
    // let newComments 
 
    // const newComments = this.apple.comments
    // newComments.comments.push(comments)
    
    
    

    // this.appleServices.addApple(comments)
  }


}
