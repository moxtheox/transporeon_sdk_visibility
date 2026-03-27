import { RejectedPromise } from "../rejectedPromise";

export class HTTP400Error extends RejectedPromise<any> {
    constructor(c:any) {
        super(400,c); 
    } //TODO:Finish class
}