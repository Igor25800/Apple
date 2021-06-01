import { Iphone } from "../interfaces/iphone-interfaces";

export class Phone implements Iphone {
    constructor(
      public  id: number,
      public  weigh : number,
      public  battery: string,
      public  pixels: string,
      public  display:string,
      public  color :string,
      public  memory:string,
      public  processor:string,
      public  cell:string,
      public  category:string,
      public  uuid:number
    ){}
}