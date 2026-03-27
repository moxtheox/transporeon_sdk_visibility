
import { HTTPVerbs } from "../../enums/http";
import { PlacesBaseRequest } from "../../abstracts/PlacesBaseRequest";

export class PlaceCreationRequest<PlaceCreationRequestBody> extends PlacesBaseRequest <PlaceCreationRequestBody>{
    public readonly RESOURCE_PATH: string;
    readonly VERB = HTTPVerbs.PUT;
    constructor(body:PlaceCreationRequestBody, reference_id:string) {
        super();
        if(!body) throw new Error('PlaceCreationRequest body is missing');
        this.requestBody = body;
        this.RESOURCE_PATH = `${this.BASE_SERVICE}${reference_id}`;
    }
}