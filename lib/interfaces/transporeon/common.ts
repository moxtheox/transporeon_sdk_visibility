import type { CustomFieldsVisibility } from "../../enums/transport_enums";

export interface TransporeonError {
    detail?: string;
    code?: string;
    timestamp: string; // ISO 8601 format
    title: string;
}

export interface iTransporeonUpdateSuccessResponse {
    result:"OK",
    transport_number:string,
    transport_id:string
}

export interface iCustomFieldValue {
    values:string[],
    visibility:CustomFieldsVisibility
}

export interface iCustomFields {
    [key:string]:iCustomFieldValue
}