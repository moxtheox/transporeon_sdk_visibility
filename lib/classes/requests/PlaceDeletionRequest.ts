import { HTTPVerbs } from "../../enums/http";
import { PlacesBaseRequest } from "../../abstracts/PlacesBaseRequest";

export class PlaceDeletionRequest extends PlacesBaseRequest {
    readonly RESOURCE_PATH: string;
    readonly VERB: HTTPVerbs;
    constructor(reference_id:string) {
        super();
        this.RESOURCE_PATH = `${this.BASE_SERVICE}${reference_id}`;
        this.VERB = HTTPVerbs.DELETE;
    }
}