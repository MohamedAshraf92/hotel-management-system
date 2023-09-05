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

  async createRoom(createRoomData: createRoomInput): Promise<Room> {
    const createdRoom = await this.roomRepository.create(createRoomData);
    await this.roomRepository.save(createdRoom);
    return createdRoom;
  }
}
