import { ICarysel } from "../interfaces/carysel.interfaces";

export class Carysel  implements ICarysel {
    constructor(
        public id: number,
        public img:string,
        public url:string
    ){}
}