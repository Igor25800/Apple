import { IWatch } from "../interfaces/apple-watch.interfaces";

export class Watch implements IWatch {
    constructor(
     public   id: number,
     public   display : string,
     public   strap: string,
     public   housing:string,
     public   size: string,
     public   color:string,
     public   category:string,
     public   uuid: number,
    ){}
}