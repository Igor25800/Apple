import { INavs } from "../interfaces/category-navs.interfaces";


export class Navs implements INavs   {
    constructor(
        public id:number,
        public nameEN:string,
        public nameUA:string
    ){}
}