
import { BaseServices } from "../../../enums/base_services";
import { TransporeonRequest } from "./TransporeonRequest";

export abstract class PlacesBaseRequest<TBody = undefined> extends TransporeonRequest<TBody> {
    protected readonly BASE_SERVICE = BaseServices.PLACES;
    constructor(){
        super();
    }
}