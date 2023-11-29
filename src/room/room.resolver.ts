import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import { createRoomInput } from './room.types';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/authGuard';
import { DoneResponse } from '../common/common.types';

@Resolver(() => Room)
export class RoomResolver {
  constructor(private roomService: RoomService) {}

  @Query(() => [Room])
  getHotelRooms(@Args('hotelId') hotelId: string): Promise<Room[]> {
    return this.roomService.getHotelRooms(hotelId);
  }

  @Query(() => Room)
  getRoomById(@Args('id') id: string): Promise<Room> {
    return this.roomService.getRoomById(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => DoneResponse)
  createRoom(
    @Args('createRoomData') createRoomData: createRoomInput,
  ): Promise<DoneResponse> {
    return this.roomService.createRoom(createRoomData);
  }
}
