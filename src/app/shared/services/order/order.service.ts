import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { IOrder } from '../../interfaces/order.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  basket: Subject<any>  = new Subject<any>();

  $arrOrder : BehaviorSubject<any> = new BehaviorSubject<any>( JSON.parse( localStorage.getItem('basket') ) );


  constructor(
    private firestory: AngularFirestore,
  ) {}

  
  getOrder() : Promise<any> {
    return  this.firestory.collection('order').ref.orderBy('id', 'asc').get().then(res =>res.docs.map(el=> el.data()))
  }

  addOrder(order: IOrder , num:string) {
    return this.firestory.collection('order').doc(num).set(order)
  }

  deleteOrder(id: string){
    return this.firestory.collection('order').doc(id).delete();
  }

  updateOrder(id, order){
    return  this.firestory.collection('order').doc(id).set(order)
  }


}
