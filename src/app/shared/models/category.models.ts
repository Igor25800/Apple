import { ICategory } from "../interfaces/category.interfaces";

export class Category implements ICategory {
    constructor(
        public id:number,
        public title:string,
        public img:string,
        public category:string,
       
    ){}
}