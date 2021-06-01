import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'node:events';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-modal-basket',
  templateUrl: './modal-basket.component.html',
  styleUrls: ['./modal-basket.component.scss']
})

export class ModalBasketComponent implements OnInit {

  orders: Array<IApple> = []

   show : boolean
   overlay: boolean 

   totalPrice :number


  constructor(
    private orderServices: OrderService
  ) {}


 

  ngOnInit(): void {
    this.getOrder()
    
    
  }

 


  getOrder() :void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      
     this.orders = JSON.parse(localStorage.getItem('basket'))
    }


  }


  hideOverlay(){
    this.overlay = false
    this.show = false
  }

  modal(){
    this.show = true
    this.overlay = true
    this.getOrder()
    this.total()
  
  }

  deletApple(item : IApple):void {
    const index = this.orders.findIndex(prod => prod.id === item.id);
    this.orders.splice(index, 1);
    this.total()
    this.updateLocalProducts()
    this.orderServices.basket.next(this.orders)
  }
  
  private updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.orders));
    this.total()
  }


  total() {
    this.totalPrice = this.orders.reduce((acum, elem)=> {
      const total =  acum + (elem.price / elem.dollarPrice * elem.count)
      return  +total.toFixed()
    }, 0 )
  
    
    

  }

}
