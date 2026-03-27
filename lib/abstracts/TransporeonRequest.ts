import type { BaseServices } from "../enums/base_services";
import type { HTTPVerbs } from "../enums/http";

export abstract class TransporeonRequest<TBody = undefined> {
    public abstract readonly RESOURCE_PATH: string;
    protected abstract readonly BASE_SERVICE: BaseServices;
    public abstract readonly VERB: HTTPVerbs;
    requestBody?:TBody;
        
    async executeRequest(apiUrl:string, authHeader:string): Promise<Response> {
        return fetch(apiUrl + this.RESOURCE_PATH, {
            method: this.VERB,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': authHeader
            },
            body: (this.requestBody) ? JSON.stringify(this.requestBody) : undefined
        });
    }
    
}