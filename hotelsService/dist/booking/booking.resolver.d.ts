import { BookRoomInput } from './booking.types';
import { BookingService } from './booking.service';
import { DoneResponse } from '../common/common.types';
export declare class BookingResolver {
    private bookingService;
    constructor(bookingService: BookingService);
    bookRoom(bookRoomData: BookRoomInput): Promise<DoneResponse>;
}
