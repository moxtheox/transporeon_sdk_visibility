import { type iDeliveryItem, type iStop, type iTransportCreationRequestBody } from '../../interfaces/transporeon/transportCreationRequestBody';
import { AssignedCarrierIdentifier, FuelTypeForRoadTransport, LoadType, TransportMode,  VehicleTypeForRoadTransport } from "../../enums/transport_enums";
import type { iCustomFields } from '../../interfaces/transporeon/common';
import type { iTransportWithDetails } from '../../interfaces/data/data_interfaces';

export class TransportCreationRequestBody implements iTransportCreationRequestBody {
    transport_mode?: TransportMode;
    assigned_carrier_id_type?: AssignedCarrierIdentifier;
    assigned_carrier_id_value: string;
    stops: iStop[];
    load_type?: LoadType;
    fuel_type_road?: FuelTypeForRoadTransport;
    vehicle_type_road?: VehicleTypeForRoadTransport;
    custom_fields?: iCustomFields;
    delivery_items: iDeliveryItem[];

    constructor(twd:iTransportWithDetails) {
        this.stops = twd.stops;
        this.assigned_carrier_id_type = AssignedCarrierIdentifier.COMPANY_ID;
        this.assigned_carrier_id_value = twd.carrier_id;
        this.transport_mode = TransportMode.ROAD;
        this.fuel_type_road = FuelTypeForRoadTransport.DSL;
        this.load_type = LoadType.FTL;
        if(twd.custom_fields) this.custom_fields = twd.custom_fields;
        this.delivery_items = twd.delivery_items
    }
}