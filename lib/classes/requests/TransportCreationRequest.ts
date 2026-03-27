
import { HTTPVerbs } from "../../enums/http";
import { TransportIdentifierType } from "../../enums/transport_enums";
import { TransportBaseRequest } from "../../abstracts/TransportsBaseRequest";

export class TransportCreationRequest<iTransportCreationRequestBody> extends TransportBaseRequest<iTransportCreationRequestBody> {
    public readonly RESOURCE_PATH: string;
    readonly VERB = HTTPVerbs.PUT;
    constructor(body: iTransportCreationRequestBody,
        identifier:string,
        id_type:TransportIdentifierType = TransportIdentifierType.TRANSPORT_NUMBER) {
        super();
        this.requestBody = body;
        this.RESOURCE_PATH = `${this.BASE_SERVICE}${id_type}/${identifier}`;
    }

}
