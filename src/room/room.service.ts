import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { In, LessThanOrEqual, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { AvailableRoomInput, CreateRoomInput } from './room.types';
import { DoneResponse } from '../common/common.types';
import { Booking } from '../booking/booking.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) {}

  async getHotelRooms(hotelId: string): Promise<Room[]> {
    const rooms = await this.roomRepository
      .createQueryBuilder('room')
      .where({ hotel: hotelId })
      .leftJoinAndSelect('room.hotel', 'hotel')
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

  async createRoom(createRoomData: CreateRoomInput): Promise<DoneResponse> {
    const { hotel, number } = createRoomData;
    const roomWithSameNumber = await this.roomRepository
      .createQueryBuilder('room')
      .where({ hotel, number })
      .getOne();

    if (roomWithSameNumber) {
      throw new BadRequestException('A room with the same number exists');
    }
    const createdRoom = await this.roomRepository.create(createRoomData);
    await this.roomRepository.save(createdRoom);
    return { done: true, message: 'Room created successfully' };
  }

  async findAvailableRooms(
    availableRoomData: AvailableRoomInput,
  ): Promise<Room[]> {
    const { startDate, endDate } = availableRoomData;
    const bookings = await this.bookingRepository
      .createQueryBuilder('booking')
      .where({
        startDate: MoreThanOrEqual(startDate),
        endDate: LessThanOrEqual(endDate),
      })
      .leftJoinAndSelect('booking.room', 'room')
      .getMany();
    const bookedRoomsIds = bookings.map((b) => (b.room as any).id);
    const availableRooms = await this.roomRepository
      .createQueryBuilder('room')
      .where({ id: Not(In(bookedRoomsIds)) })
      .leftJoinAndSelect('room.hotel', 'hotel')
      .getMany();
    return availableRooms;
  }
}
