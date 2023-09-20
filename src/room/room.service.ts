import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { Repository } from 'typeorm';
import { createRoomInput } from './room.types';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}

  async getHotelRooms(hotelId: string): Promise<Room[]> {
    console.log({ hotelId });
    const rooms = await this.roomRepository.find({
      relations: ['hotel'],
      where: { hotel: hotelId },
    });
    // const rooms = await this.roomRepository.find({
    //   where: { type: 'Double', hotel: hotelId },
    // });
    return rooms;
  }

  async getRoomById(id: string): Promise<Room> {
    const room = await this.roomRepository.findOneBy({ id });
    return room;
  }

  async createRoom(createRoomData: createRoomInput): Promise<Room> {
    const createdRoom = await this.roomRepository.create(createRoomData);
    await this.roomRepository.save(createdRoom);
    return createdRoom;
  }
}
