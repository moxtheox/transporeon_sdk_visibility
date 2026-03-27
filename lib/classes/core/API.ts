import { TransportIdentifierType } from "../../enums/transport_enums";
import type { iTransportWithDetails } from "../../interfaces/data/data_interfaces";
import type { BasicAuth } from "../common";
import { TransportCreationRequest } from "../requests/TransportCreationRequest";
import { TransportCreationRequestBody } from "../requests/TransportCreationRequestBody";

export class API {

    constructor(private auth:BasicAuth, private apiUrl:string){
        //TODO:Auth validation and error handling
    }

    public createUpdateTransport(twd:iTransportWithDetails):Promise<Response> {
        const cut = new TransportCreationRequestBody(twd);
        const idType = (twd.trp_uuid) ? 
            TransportIdentifierType.TRANSPORT_ID :
            TransportIdentifierType.TRANSPORT_NUMBER;
        const id = (idType === TransportIdentifierType.TRANSPORT_ID) ? twd.trp_uuid : twd.trp_transport_number;
        if(!id){}//TODO:Error Handling
        const req = new TransportCreationRequest(cut, id!, idType);
        return req.executeRequest(this.apiUrl, this.auth.getAuthHeader());
    }
}