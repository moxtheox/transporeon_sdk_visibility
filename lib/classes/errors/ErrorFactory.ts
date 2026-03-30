import type { iGenericRequestError } from "../../interfaces/errors/genericRequestError";
import { RejectedPromise } from "./rejectedPromise";

export class CatchErrorFactory {

    static stdErr<T>(code:number, e:T):RejectedPromise<T> {
        return new RejectedPromise(code,e);
    }

    static genericHttpError(code:number, message:string, requestBody:object): RejectedPromise<iGenericRequestError> {
        return new RejectedPromise(code,{message: message, requestBody: requestBody});
    }

    static http400(RequestBody:object): RejectedPromise<iGenericRequestError> {
        return new RejectedPromise(400,{message:"Bad Request", requestBody:RequestBody});
    }

    static http401(authHeader:string): RejectedPromise<string> {
        return new RejectedPromise(401, `Unauthorized. Provided auth header: ${authHeader}`);
    }

    static http402(requestObject:object): RejectedPromise<iGenericRequestError> {
        return new RejectedPromise(402,{message: "Payment Required", requestBody: requestObject});
    }

    static http403(url:string): RejectedPromise<string> {
        return new RejectedPromise(403, `Forbidden. Access to ${url} is denied.`);
    }

    static http404(url:string): RejectedPromise<string> {
        return new RejectedPromise(404, `Not Found.  The requested resource at ${url} was not found.`);
    }
}