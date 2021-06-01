import { IComments } from "../interfaces/comments.interfaces";

export class Comments implements IComments {
    constructor(
        public id:number,
        public uuid: number,
        public name:string,
        public description:string,
        public date:any,
       
    ){}
}