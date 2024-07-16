import { Booking } from './booking.entity';
import { Repository } from 'typeorm';
import { BookRoomInput } from './booking.types';
import { DoneResponse } from '../common/common.types';
export declare class BookingService {
    private bookingRepository;
    constructor(bookingRepository: Repository<Booking>);
    bookRoom(bookRoomData: BookRoomInput): Promise<DoneResponse>;
}
