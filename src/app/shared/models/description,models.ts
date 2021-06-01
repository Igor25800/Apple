import { IDescription } from "../interfaces/description.interfaces";

export class Description implements IDescription {
    constructor(
     public   id: number,
     public   uuid:number,
     public   category:string,
     public   title:string ,
     public   description: string ,
     public   img:string
    ) {}
}