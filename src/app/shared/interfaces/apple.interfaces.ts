import { IComments } from "./comments.interfaces";
import { IDescription } from "./description.interfaces";
import { Iphone } from "./iphone-interfaces";

export interface IApple {
    id: number,
    uuid:number
    count :number,
    title:string,
    price: number,
    img:string,
    category:string,
    categoryProduct:string
    dollarPrice :number
    memory?:string,
    color?:string,
    // description? : IDescription  
    // detalis?: any ,
    // comments? : IComments []
    
    
}