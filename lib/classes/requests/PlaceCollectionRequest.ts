import { HTTPVerbs } from "../../enums/http";
import { PlacesBaseRequest } from "../../abstracts/PlacesBaseRequest";



export class PlaceCollectionRequest extends PlacesBaseRequest {
    readonly RESOURCE_PATH: string;
    readonly VERB = HTTPVerbs.GET;
    constructor(reference_id?:string) {
        super();
        this.RESOURCE_PATH = (reference_id) ? `${this.BASE_SERVICE}${reference_id}`: `${this.BASE_SERVICE}`;
    }
}