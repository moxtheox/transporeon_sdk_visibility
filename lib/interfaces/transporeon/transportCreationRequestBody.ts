import { TransportMode, AssignedCarrierIdentifier, LoadType, FuelTypeForRoadTransport, VehicleTypeForRoadTransport, EmissionClass, TemperatureUnits, DeliveryActionType, ValueTypeWeightUnits, DeliveryItemTypes, LengthUnits, PieceTypes, PackageTypes, DeliveryItemWeightUnits, DeliveryItemLinearUnits, DeliveryItemVolumeUnits, HAZMATCategories } from "../../enums/transport_enums";
import type { iCustomFields } from "./common";

export interface iAddress {
    street_address?: string;
    city?: string;
    state?: string;
    country?: string; //Country code (ISO 3166-1 alpha-2)
    zipcode?: string;
}

export interface iDeliveryStationLocationInformation {
    location_reference_number: string;
    name: string;
    address: iAddress;
    coordinates?: iCoordinates;
}

export interface iPlaceReference {
    place_reference_id: string;
}

export interface iCoordinates {
    lat: number;
    lng: number;
}

export interface iTimeslot {
    begin: string; // ISO 8601 format
    end: string;   // ISO 8601 format
}

export interface iStopContact {
    contact_names: string[];
    phone_numbers: string[];
    email_addresses: string[];
    locale: string;
    phone_number_extensions: string[]; // Phone number extension of the contact person in ISO 3166-1 alpha-2 format
}

export interface iStop {
    stop_reference_number: string;
    sequence_number: number;
    location: iDeliveryStationLocationInformation | iPlaceReference;
    timeslot?: iTimeslot;
    stop_contacts?: iStopContact[];
}

export interface iStopReference {
    stop_reference_number : string;
    action?: DeliveryActionType; // e.g. "collection" or "delivery"
}

export interface iValueUnit {
    value: number;
    unit: ValueTypeWeightUnits |  LengthUnits |  TemperatureUnits; 
}

export interface iHAZMATType {
    category: HAZMATCategories;
    class:number;
    name:string;
}

export interface iOrderItem {
    order_item_name: string;
    purchase_order_number?: string;
    piece_count?: number;
    piece_description?: string;
    piece_unit: PieceTypes; // e.g. "pallet", "box", "each"
    package_type?: PackageTypes; // e.g. "pallet", "box", "crate"
    weight_amount?: number;
    weight_unit?: DeliveryItemWeightUnits;
    item_length?:number;
    item_width?:number;
    item_height?:number;
    linear_unit?: DeliveryItemLinearUnits;
    volume?:number;
    volume_unit?: DeliveryItemVolumeUnits;
    is_hazardous?: boolean;
    hazmat_type?: iHAZMATType;
    is_stackable?: boolean;
    value_amount?: number;
    value_currency?: string; // ISO 4217 currency code, e.g. "USD"
    temperature_min?: number;
    temperature_max?: number;
    temperature_req?: number; //Required temperature of the item piece
    temperature_unit?: TemperatureUnits;
    customs_tarrif?: number;
    custom_fields?: object,
    piece_sku_id?: string;
}

export interface iConsigneeContact {
    email_address?: string;
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    locale?: string; // User's language and locale preference, as a ISO 639-1 code that may be combined with a ISO 3166-1 region specifier
    interested_in_stop_type?: DeliveryActionType; // e.g. "collection" or "delivery"
    code?: string; // Code identifier for the contact/company
}

export interface iDeliveryItem {
    stop_references: iStopReference[];
    weight?: iValueUnit;
    purchase_order_number?: string;
    order_number?: string;
    consignee_contacts?: iConsigneeContact[];
    delivery_item_type: DeliveryItemTypes;
    loading_length?: iValueUnit;
    order_items?: iOrderItem[];
    delivery_order_number: string;
    custom_fields?: object[];
}

export interface iTemperatureRange {
    temperature_min?: number;
    temperature_max?: number;
    temperature_unit: TemperatureUnits;
}

export interface iTransportCreationRequestBody {
    transport_mode?: TransportMode;
    assigned_carrier_id_type?: AssignedCarrierIdentifier;
    assigned_carrier_id_value: string;
    customer_id?: string;
    stops: iStop[];
    delivery_items?: iDeliveryItem[];
    bill_of_lading?: string;
    custom_fields?: iCustomFields;
    load_type?: LoadType;
    fuel_type_road?: FuelTypeForRoadTransport;
    vehicle_type_road?: VehicleTypeForRoadTransport;
    empty_trip_factor?: number; // Integer: Empty trip factor for transport calculated by empty running / loaded distance.
    load_factor?: number; // Double: Load factor for transport calculated by cargo weight/max payload weight.
    emission_class?: EmissionClass;
    previous_transport_id?: string[];
    temperature_range?: iTemperatureRange;
}   

export interface iTransportCreateUpdateResponse {
    result: string;
    transport_number: string;
    transport_id:string;
}