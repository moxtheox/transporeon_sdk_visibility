import type { iRejectedPromise } from "../../interfaces/errors/rejectedPromisePayloadInterface";

export class RejectedPromise<T> extends Error implements iRejectedPromise<T>  {

    constructor(public code:number,public result:T) {
        super(`Promise rejected with code: ${code}`);
    }
}