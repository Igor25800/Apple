import { IApple } from "./apple.interfaces";

export interface IOrder {
    id: number;
    userName: string;
    lastName:string;
    userPhone: string;
    email:string
    date:Date
    orders: IApple[];
    menu:string,
    street?:any;
    adress?: any,
    novaCisty?:any,
    novaAddres?:any
   
}



