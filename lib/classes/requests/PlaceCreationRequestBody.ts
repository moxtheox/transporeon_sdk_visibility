import type { iTransporeonPlace,
    iTransporeonPlaceAddress, 
    iTransporeonPlaceGeometry, 
    iTransporeonPlaceAddressAlias 
} from "../../interfaces/transporeon/transporeonPlace";

export class PlaceCreationRequestBody implements iTransporeonPlace {
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
    constructor(place:iTransporeonPlace) {
        this.name = place.name;
        this.address = place.address;
        this.geometry = place.geometry;
        this.geofence = {
                            type:"Feature",
                            properties:{
                                radius_in_meters:150
                            },
                            geometry:place.geometry
                        };  
        this.address_aliases = place?.address_aliases;
    }
}