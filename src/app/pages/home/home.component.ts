import { Component, OnInit } from '@angular/core';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { IGallery } from 'src/app/shared/interfaces/gallery.interfaces';
import { Iphone } from 'src/app/shared/interfaces/iphone-interfaces';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { CaruselService } from 'src/app/shared/services/carusel/carusel.service';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { OrderService } from 'src/app/shared/services/order/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appleArr :Array<Iphone> = []
  arrOrder : IApple[] = []
  arrGallery : IGallery[] = []

  orderApple

  arr


  constructor(
    private caruselServices : CaruselService,
    private order : OrderService,
    private galleryServices: GalleryService,
    private aplel: AppleService
  ) { }

  ngOnInit(): void {
    this.getApple()
    this.getOrder()
    this.getGalley()
    this.aplel.getNova().subscribe(res => {
      console.log(res);
      
    })
 
  }

  getApple():void {
    this.caruselServices.getApple().then(res => {
      this.appleArr = res 
      this.appleArr = this.appleArr.slice(-5)
      this.orderApple = res
     
      
      
    })
  }

  getGalley():void {
    this.galleryServices.getGallery().then(res => {
      this.arrGallery = res 
      this.arrGallery = this.arrGallery.slice(-12)
    })
  }

  getOrder():void {
    this.order.getOrder().then(res => {
      const arr = res.map(el => el.orders)
     
      
      this.arrOrder = arr.flat().sort((a,b)=> a.count - b.count ).slice(-4)
     
      
      // this.arr =  this.orderApple.filter(el => !this.arrOrder.filter(elem => elem.uuid === el.uuid).length)
  
      this.arr = this.orderApple.filter(el => this.arrOrder.some(elem => elem.uuid === el.uuid))
      console.log(this.arr);
      
   
      
      
   
      
   
  
      
    
      
   
   
      
  
  })

  }


}
