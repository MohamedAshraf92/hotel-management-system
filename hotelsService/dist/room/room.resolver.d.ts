import { RoomService } from './room.service';
import { Room } from './room.entity';
import { AvailableRoomInput, CreateRoomInput } from './room.types';
import { DoneResponse } from '../common/common.types';
export declare class RoomResolver {
    private roomService;
    constructor(roomService: RoomService);
    getHotelRooms(hotelId: string): Promise<Room[]>;
    getRoomById(id: string): Promise<Room>;
    findAvailableRooms(availableRoomData: AvailableRoomInput): Promise<Room[]>;
    createRoom(createRoomData: CreateRoomInput): Promise<DoneResponse>;
}
