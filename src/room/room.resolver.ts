import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import { createRoomInput } from './room.types';
import { Hotel } from '../hotel/hotel.entity';
import { HotelService } from '../hotel/hotel.service';

@Resolver()
export class RoomResolver {
  constructor(
    private roomService: RoomService,
    private hotelService: HotelService,
  ) {}

  @Mutation(() => Room)
  createRoom(@Args('createRoomData') createRoomData: createRoomInput) {
    return this.roomService.createRoom(createRoomData);
  }

  // @ResolveField()
  // async hotel(@Parent() room: Room) {
  //   return this.hotelService.getHotelById(room.hotel);
  // }
}
