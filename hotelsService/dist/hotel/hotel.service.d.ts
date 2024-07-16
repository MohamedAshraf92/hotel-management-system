import { Hotel } from './hotel.entity';
import { Repository } from 'typeorm';
import { CreateHotelInput, UpdateHotelInput } from './hotel.types';
export declare class HotelService {
    private hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    getAllHotels(): Promise<Hotel[]>;
    getHotelById(id: string): Promise<Hotel>;
    createHotel(createHotelData: CreateHotelInput): Promise<Hotel>;
    updateHotel(updatedHotelData: UpdateHotelInput): Promise<Hotel>;
}
