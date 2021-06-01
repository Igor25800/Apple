import { IMac } from "../interfaces/mac.interfaces";

export class Mac implements IMac {
    constructor(
     public   id: number,
     public   processor:string,
     public   nuclei:string,
     public   cpu:string,
     public   videoCard :string,
     public   color:string,
     public   year:string,
     public   ram:string,
     public   display:string,
     public   category:string,
     public   uuid: number
    ){}
}