import { RejectedPromise } from "../rejectedPromise";

export class HTTP400Error<T> extends RejectedPromise<T> {
    constructor(c:T) {
        super(400,c); 
    } //TODO:Finish class
}