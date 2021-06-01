import { IGallery } from "../interfaces/gallery.interfaces";

export class Gallery implements IGallery {
    constructor(
     public id:number,
     public img:string,
     public name:string,
    ){}
}