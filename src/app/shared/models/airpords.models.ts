import { IAirPods } from "../interfaces/airpods.interfaces";

export class Airpods implements IAirPods {
    constructor(
    public id: number,
    public uuid:number,
    public color: string,
    public charging :string,
    public category:string,
    ){}
}