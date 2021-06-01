import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interfaces';
import { OrderService } from 'src/app/shared/services/order/order.service';


@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class AdminOrderComponent implements OnInit {

  columnsToDisplay = ['id','userName', 'lastName', 'userPhone', 'email' , 'street'  , 'delete'];
  // columnsToDisplay = ['id' ,'userName'];

  arrOrder :Array<IOrder> = []

  displayedColumns: string[] = ['img', 'name' ,'category' ,'priceDol', 'priceUK' , 'count' ,'syma'];
  
  

  constructor(
    private orderServices: OrderService 
  ) { }

  ngOnInit(): void {
    this.getLooder()
  }

  getLooder():void {
    this.orderServices.getOrder().then(res => {
      this.arrOrder = res
      console.log(res);
      
      
    })
  }

  deleteOrder(item):void {
    this.orderServices.deleteOrder(`order ${item.id}`).then(()=> {
      this.getLooder()
    })
  }

}
