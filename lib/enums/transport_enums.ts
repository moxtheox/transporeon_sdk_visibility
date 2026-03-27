
export enum TransportIdentifierType {
    TRANSPORT_NUMBER = 'transport_number',
    TRANSPORT_ID = 'transport_id',
}

export enum AssignedCarrierIdentifier {
    COMPANY_ID = 'company_id',
    RELATION_IDENTIFIER = 'relation_identifier',
}

export enum TransportMode {
    ROAD = 'road',
    OCEAN = 'ocean',
    AIR = 'air',
}

export enum LoadType {
    LTL = 'ltl',
    FTL = 'ftl',
    LCL = 'lcl',
    FCL = 'fcl',
    CEP = 'cep',
    BULK = 'bulk',
    CPU = 'cpu',
    LTL_GROUPAGE = 'ltl_groupage',
}

export enum FuelTypeForRoadTransport {
    DSL = 'dsl', // Diesel
    ELC = 'elc', // BEV - Battery Electric Vehicle
    B100 = 'b100', // 1st Generation Biodiesel (from vegetable oils and animal fats)
    HVO = 'hvo', // 2nd Generation Biodiesel (from waste and residues)
    CNG = 'cng', // Compressed Natural Gas
    LNG = 'lng', // Liquefied Natural Gas
    BLNG = 'blng', // 100% Bio LNG
    BCNG = 'bcng', // 100% Bio CNG
    HYD = 'hyd', // Hydrogen
}

export enum VehicleTypeForRoadTransport {
    CLASS_CAR = 'class_car',
    CLASS_n1_i = 'class_n1_i',
    CLASS_n1_ii = 'class_n1_ii',
    CLASS_n1_iii = 'class_n1_iii',
    CLASS7_5 = 'class7_5',
    CLASS12 = 'class12',
    CLASS20 = 'class20',
    CLASS26 = 'class26',
    CLASS40 = 'class40',
    CLASS44 = 'class44',
    CLASS50 = 'class50',
    CLASS60 = 'class60',
    CLASS_GT60 = 'class_gt60',
    CLASS14_KLBS_RIGID = 'class14_klbs_rigid',
    CLASS19_5_KLBS_RIGID = 'class19_5_klbs_rigid',
    CLASS33_KLBS_RIGID = 'class33_klbs_rigid',
    CLASS33_KLBS_ARTICULATED = 'class33_klbs_articulated',
    CLASS80_KLBS_RIGID = 'class80_klbs_rigid',
    CLASS80_KLBS_ARTICULATED = 'class80_klbs_articulated',
    CLASS_KLBS_ARTICULATED_GLIDER = 'class_klbs_articulated_glider',
    CLASS16_KLBS = 'class16_klbs',
    CLASS_6_KLBS = 'class26_klbs',
    CLASS44_KLBS = 'class44_klbs',
    CLASS60_KLBS = 'class60_klbs',
    CLASS80_KLBS = 'class80_klbs',
    CLASS100_KLBS = 'class100_klbs',
    CLASS130_KLBS = 'class130_klbs',
    CLASS_GT130_KLBS = 'class_gt130_klbs',
}

export enum EmissionClass {
    EU_EURO1 = 'eu_euro1',
    EU_EURO2 = 'eu_euro2',
    EU_EURO3 = 'eu_euro3',
    EU_EURO4 = 'eu_euro4',
    EU_EURO5 = 'eu_euro5',
    EU_EURO6 = 'eu_euro6',
    EU_EURO6AC = 'eu_euro6ac',
    EU_EURO6DE = 'eu_euro6de',
    US_MOVES1999 = 'us_moves1999',
    US_MOVES2000 = 'us_moves2000',
    US_MOVES2002 = 'us_moves2002',
    US_MOVES2006 = 'us_moves2006',
    US_MOVES2010 = 'us_moves2010',
    US_MOVES2013 = 'us_moves2013',
    US_MOVES2016 = 'us_moves2016',
    US_MOVES2020 = 'us_moves2020',
    JP1994 = 'jp1994',
    JP1997 = 'jp1997',
    JP2003 = 'jp2003',
    JP2005 = 'jp2005',
    JP2009 = 'jp2009',
    JP2016 = 'jp2016',
    US_EPA_1994 = 'us_epa_1994',
    US_EPA_1998 = 'us_epa_1998',
    US_EPA_2004 = 'us_epa_2004',
    US_EPA_2007 = 'us_epa_2007',
    US_EPA_2010 = 'us_epa_2010',
}

export enum TemperatureUnits {
    C = 'C', // Celsius
    F = 'F', // Fahrenheit
    K = 'K', // Kelvin
}

export enum DeliveryActionType {
    COLLECTION = 'collection',
    DELIVERY = 'delivery',
    WAYPOINT = 'waypoint',
}

export enum ValueTypeWeightUnits {
    KG = 'kg',
    USTON = 'uston',
    TONNE = 'tonne',
    TEU = 'teu',
    FEU = 'feu',
    PALLET = 'pallet',
    G = 'g',
    LBS = 'lbs',
    KT = 'kt',
    MG = 'mg',
    OZ = 'oz',
    CARAT = 'carat',
    GAL = 'gal',
}

export enum DeliveryItemTypes {
    DELIVERY_ORDER = 'delivery_order',
}

export enum LengthUnits {
    CM = 'cm',
    DM = 'dm',
    FP = 'fp',
    FT = 'ft',
    IN = 'in',
    KM = 'km',
    M = 'm',
    MI = 'mi',
    MIM = 'mim',
    MM = 'mm',
    NAM = 'nam',
    YD = 'yd',
}

export enum PieceTypes {
    PALLET = 'pallet',
    BOX = 'box',
    EACH = 'each',
    GALLON = 'gallon',
    LITER = 'liter',
    OUNCES = 'ounces',
}

export enum PackageTypes {
    PALLET = 'pallet',
    BALE = 'bale',
    BOX = 'box',
    CASE = 'case',
    CRATE = 'crate',
    DRUM = 'drum',
    REEL = 'reel',
    CONTAINER = 'container',
    OTHER = 'other',
}

export enum DeliveryItemWeightUnits {
    POUNDS = 'pounds',
    KILOGRAMS = 'kilograms',
    SHORT_TONS = 'short_tons',
    METRIC_TONS = 'metric_tons',
    OUNCES = 'ounces',
    GRAMS = 'grams',
}

export enum DeliveryItemLinearUnits {
    METERS = 'meters',
    KILOMETERS = 'kilometers',
    INCHES = 'inches',
    FEET = 'feet',
    MILES = 'miles',
}

export enum DeliveryItemVolumeUnits {
    GALLONS = 'gallons',
    LITERS = 'liters',
    OUNCES = 'ounces',
    CUBIC_FEET = 'cubic_feet',
    CUBIC_METERS = 'cubic_meters',
}

export enum HAZMATCategories {
    EXPLOSIVES = 'explosives',
    GASES = 'gases',
    FLAMMABLE_LIQUIDS = 'flammable_liquids',
    FLAMMABLE_SOLIDS = 'flammable_solids',
    OXIDIZING_ORGANIC = 'oxidizing_organic',
    TOXIC_INFECTIOUS = 'toxic_infectious',
    RADIOACTIVE = 'radioactive',
    CORROSIVE = 'corrosive',
    MISCELLANEOUS = 'miscellaneous',
}

export enum CustomCustomerCodes {
    DO_IT_BEST = 'TSVLDIB',
}

export enum CustomFieldsVisibility {
    CREATOR = 'creator',
    FORWARDING = 'forwarding_chain',
    EVERYONE = 'everyone'
}