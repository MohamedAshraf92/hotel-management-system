import { CreateHotelInput, UpdateHotelInput } from './hotel.types';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
export declare class HotelResolver {
    private hotelService;
    constructor(hotelService: HotelService);
    getAllHotels(): Promise<Hotel[]>;
    getHotelById(id: string): Promise<Hotel>;
    createHotel(createHotelData: CreateHotelInput): Promise<Hotel>;
    updateHotel(updatedHotelData: UpdateHotelInput): Promise<Hotel>;
}
