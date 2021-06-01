import { IApple } from "../interfaces/apple.interfaces";
import { IOrder } from "../interfaces/order.interfaces";


export class Order implements IOrder {
    constructor(
      public  id: number,
      public  userName: string,
      public  lastName:string,
      public  userPhone: string,
      public  email:string,
      public  date:Date,
      public  orders: IApple[],
      public  menu:string,
      public  street?:any,
      public  adress?:any,
      public  novaCisty?:any,
      public  novaAddres?:any
      
    ){}
}