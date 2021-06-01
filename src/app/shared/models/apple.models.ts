import { IApple } from "../interfaces/apple.interfaces";
import { ICategory } from "../interfaces/category.interfaces";
import { IDescription } from "../interfaces/description.interfaces";

export class Apple implements IApple {
    // public detalis = {};
    constructor(
    public id: number,
    public uuid :number,
    public count: number,
    public title:string,
    public price: number,
    public img:string,
    public category:string,
    public categoryProduct:string,
    public dollarPrice: number,
    public color?:string,
    public memory?:string,
    // public description? : IDescription
    // public detalis? :any,

    ){}
}