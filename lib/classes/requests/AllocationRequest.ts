import { HTTPVerbs } from "../../enums/http";
import {TransportIdentifierType} from "../../enums/transport_enums";
import type { iTransportWithDetails } from "../../interfaces/data/data_interfaces";
import { TransportBaseRequest } from "../../abstracts/TransportsBaseRequest";
export class AllocationRequest<iLicensePlateAllocation> extends TransportBaseRequest<iLicensePlateAllocation> {
    public readonly RESOURCE_PATH: string;
    readonly VERB = HTTPVerbs.POST;
    constructor(detail:iTransportWithDetails) {
        super();
        if(!detail.truck) throw new Error('Transport with detail is missing truck identifier');
        this.requestBody = {license_plate_number:detail.truck} as iLicensePlateAllocation;
        const mod = (detail.trp_uuid) ? 
            `${TransportIdentifierType.TRANSPORT_ID}/${detail.trp_uuid}/`:
            `${TransportIdentifierType.TRANSPORT_NUMBER}/${detail.trp_transport_number}/`;
        this.RESOURCE_PATH = this.BASE_SERVICE + mod + 'allocation';
    }
}