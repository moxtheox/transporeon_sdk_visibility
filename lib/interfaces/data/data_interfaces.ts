import type { iCustomFields } from "../transporeon/common";
import type { iDeliveryItem, iStop } from "../transporeon/transportCreationRequestBody";

export interface iTransportWithDetailsResponse{
    get_transport_with_details: iTransportWithDetails | null;
}

export interface iTransportWithDetails {
    stops: iStop[],
    truck: string|null,
    trp_uuid: null|string,
    bolt_pro_number: number,
    trp_transport_number: string,
    custom_fields:iCustomFields,
    delivery_items: iDeliveryItem[],
    carrier_id: string,
}

export interface iTransportsNeedingUpdate {
    get_pending_trp_updates:number,
}

export interface iTransportRecord {
    sys_id:number;
    bolt_pro_number:number;
    trp_transport_id:string | null;
    trp_transport_number:string;
    trp_update_required:boolean;
    sys_truck_id:number | null;
}

export interface iLocationRecord {
    sys_location_id:number
    bolt_location_id:number;
    street_1:string;
    street_2:string | null;
    city:string;
    state:string;
    lat:number | null;
    lng:number | null;
    location_sys_contacts: number[] | null;
    location_name:string | null;
    zipcode:string | null;
    country:string | null;
    code: string | null;
}

export interface iStopRecord {
    sys_stop_id:number;
    bolt_location_id:number;
    stop_number:number;
    stop_pos:string[];
    schd_arr:string | null;
    actl_arr:string | null;
    schd_dpt:string | null;
    actl_dpt:string | null;
    stop_type_int:number;
    bolt_stop_id:number;
    transport_sys_id:number;  
}

export interface iTruckRecord {
    sys_truck_id:number;
    bolt_truck_id:number;
    truck_number:string;
}

export interface iMasterTransportPayload {
    transport: iTransportRecord;
    truck: iTruckRecord;
    locations: iLocationRecord[];
    stops: iStopRecord[];
}