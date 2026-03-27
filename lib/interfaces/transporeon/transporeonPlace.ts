import type { iAddress } from "./transportCreationRequestBody";

export interface iTransporeonPlaceAddress extends iAddress {
    disable_address_matching?: boolean;
}

export interface iTransporeonPlaceGeometry {
    type: "Point";
    coordinates: [number, number]; // [Latitude, Longitude]
}

export interface iTransporeonPlaceAddressAlias {
    street_address:string;
    city:string;
    state:string;
    country:string;
    zipcode:string;
    name?:string;
}

export interface iTransporeonPlace {
    name:string;
    address?: iTransporeonPlaceAddress;
    geometry: iTransporeonPlaceGeometry;
    geofence?: {
        type:"Feature";
        properties:{
            radius_in_meters:number;
        };
        geometry:iTransporeonPlaceGeometry;

    }
    address_aliases?: iTransporeonPlaceAddressAlias[];
}

export interface iTransporeonPlacePayload {
    payload: iTransporeonPlace;
    trp_place_reference_id: string;
}