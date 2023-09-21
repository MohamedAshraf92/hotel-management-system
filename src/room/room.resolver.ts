import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import { createRoomInput } from './room.types';
import { HotelService } from '../hotel/hotel.service';

@Resolver(() => Room)
export class RoomResolver {
  constructor(
    private roomService: RoomService,
    private hotelService: HotelService,
  ) {}

  @Query(() => [Room])
  getHotelRooms(@Args('hotelId') hotelId: string): Promise<Room[]> {
    return this.roomService.getHotelRooms(hotelId);
  }

  @Query(() => Room)
  getRoomById(@Args('id') id: string): Promise<Room> {
    return this.roomService.getRoomById(id);
  }

  @Mutation(() => Room)
  createRoom(@Args('createRoomData') createRoomData: createRoomInput) {
    return this.roomService.createRoom(createRoomData);
  }

  @ResolveField('hotel')
  async hotel(@Parent() room: Room) {
    return this.hotelService.getHotelById(room.hotel);
  }
}
