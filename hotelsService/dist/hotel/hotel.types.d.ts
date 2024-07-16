export declare class CreateHotelInput {
    name: string;
    description: string;
    stars: number;
    address: string;
    town: string;
}
export declare class UpdateHotelInput extends CreateHotelInput {
    id: string;
}
