import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IApple } from 'src/app/shared/interfaces/apple.interfaces';
import { IOrder } from 'src/app/shared/interfaces/order.interfaces';
import { Order } from 'src/app/shared/models/order.models';
import { AppleService } from 'src/app/shared/services/apple/apple.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { mysor } from 'src/app/mysor/mysor'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  orders: Array<IApple> = []
  totalPrice: number;
  totalUk: number

  active:string = '1'

  orderArr :Array<IOrder> = []

  // public activeItem: string;


  formGroup = this.formBolider.group({
    name: new FormControl('' , Validators.required),
    lastName: new FormControl('' , Validators.required),
    number: new FormControl('' , Validators.required),
    email: new FormControl('' , Validators.required),
    maps: new FormControl((mysor[0])),
    adress: new FormControl(''),
    nova : new FormControl('Львів'),
    novaMaps: new FormControl('Відділення №1: вул. Городоцька, 359')
  })

  constructor(
    private orderServices: OrderService,
    private router: Router,
    private formBolider :FormBuilder,
    private appleServices: AppleService
  
  ) { }

  ngOnInit(): void {
    this.getOrder()
    this.total()
    this.getloader()
  
    
  }



  activeItem(value):void {
    this.active = value
    
  }



  getloader() {
    this.orderServices.getOrder().then(order => {
      // console.log(apple);
      
       this.orderArr = order
      //  console.log(apple, 'aplle');
  })
}
  

  getOrder() :void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      
     this.orders = JSON.parse(localStorage.getItem('basket'))
    }
  }

  deletApple(item : IApple):void {
    const index = this.orders.findIndex(prod => prod.id === item.id);
    this.orders.splice(index, 1);
    this.total()
    this.updateLocalProducts()
    this.orderServices.basket.next(this.orders)
    
    if(JSON.parse(localStorage.getItem('basket')).length === 0 ) {
      this.router.navigate(['category/', item.category ])
    }

    
  }


  private updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.orders) ) ;
    this.total()
  }


  

  productCount(product: IApple, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.total();
    this.updateLocalProducts();
    this.orderServices.basket.next(this.orders);
  }

  private total() {
    this.totalPrice = this.orders.reduce((total, elem) => {
      return total + (elem.price / elem.dollarPrice * elem.count);
    }, 0);
  
    this.totalUk = this.orders.reduce((total, elem) => {
      return total + (elem.price  * elem.count);
    }, 0);
  }
  
  addOrder(form){
   
    
    const order = {... new Order(1,form.name,form.lastName,form.number,form.email, new Date, this.orders ,this.active, form.maps,form.adress,form.nova,form.novaMaps)}
    console.log(order);
    
    if(this.orderArr.length > 0) {
      order.id = this.orderArr.slice(-1)[0].id +1
    }

    this.orderServices.addOrder(order, `order ${order.id}`).then(()=>{
      this.getloader()
    })
    this.formGroup.reset()
    this.orders = []
    
    localStorage.setItem('basket', JSON.stringify(this.orders));
    this.orderServices.basket.next(this.orders);

    // const find =  this.orderArr.find(el => el).orders.find(el => el)
    if(JSON.parse(localStorage.getItem('basket')).length === 0 ) {
      this.router.navigate(['home' ])
    }
  
  }


}
