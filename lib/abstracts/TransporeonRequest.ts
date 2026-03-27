import type { BaseServices } from "../../../enums/base_services";
import type { HTTPVerbs } from "../../../enums/http";
import { BasicAuth, SafeEnVars } from "../common";

export abstract class TransporeonRequest<TBody = undefined> {
    public abstract readonly RESOURCE_PATH: string;
    protected abstract readonly BASE_SERVICE: BaseServices;
    public abstract readonly VERB: HTTPVerbs;
    protected auth: BasicAuth = new BasicAuth();
    requestBody?:TBody;
        
    async executeRequest(): Promise<Response> {
        return fetch(this.getTransporeonBaseURL() + this.RESOURCE_PATH, {
            method: this.VERB,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': this.auth.getAuthHeader()
            },
            body: (this.requestBody) ? JSON.stringify(this.requestBody) : undefined
        });
    }

    private getTransporeonBaseURL():string {
        return SafeEnVars.safeEnvVar(process.env.TP_ENDPOINT);
    }

    
}