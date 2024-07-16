import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { Repository } from 'typeorm';
import { BookRoomInput } from './booking.types';
import { DoneResponse } from '../common/common.types';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) {}

  async bookRoom(bookRoomData: BookRoomInput): Promise<DoneResponse> {
    const newBooking = await this.bookingRepository.create(bookRoomData);
    await this.bookingRepository.save(newBooking);
    return { done: true, message: 'Room booked successfully' };
  }
}
