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
    const rooms = await this.roomRepository
      .createQueryBuilder('room')
      .where({ hotel: hotelId })
      // .leftJoinAndSelect('room.hotel', 'hotel')
      .getMany();

    return rooms;
  }

  async getRoomById(id: string): Promise<Room> {
    const room = await this.roomRepository
      .createQueryBuilder('room')
      .where({ id })
      .getOne();
    return room;
  }

  async createRoom(createRoomData: createRoomInput): Promise<Room> {
    const createdRoom = await this.roomRepository.create(createRoomData);
    return await this.roomRepository.save(createdRoom);
  }
}
