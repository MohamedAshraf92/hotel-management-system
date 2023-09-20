import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import { createRoomInput } from './room.types';
import { Inject } from '@nestjs/common';
import { HotelService } from '../hotel/hotel.service';

@Resolver()
export class RoomResolver {
  constructor(
    @Inject(RoomService) private roomService: RoomService,
    @Inject(HotelService) private hotelService: HotelService,
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
}
