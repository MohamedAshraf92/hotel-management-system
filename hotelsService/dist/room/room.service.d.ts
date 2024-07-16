import { Room } from './room.entity';
import { Repository } from 'typeorm';
import { AvailableRoomInput, CreateRoomInput } from './room.types';
import { DoneResponse } from '../common/common.types';
import { Booking } from '../booking/booking.entity';
export declare class RoomService {
    private roomRepository;
    private bookingRepository;
    constructor(roomRepository: Repository<Room>, bookingRepository: Repository<Booking>);
    getHotelRooms(hotelId: string): Promise<Room[]>;
    getRoomById(id: string): Promise<Room>;
    createRoom(createRoomData: CreateRoomInput): Promise<DoneResponse>;
    findAvailableRooms(availableRoomData: AvailableRoomInput): Promise<Room[]>;
}
