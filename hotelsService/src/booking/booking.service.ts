import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { Repository } from 'typeorm';
import { BookRoomInput } from './booking.types';
import { DoneResponse } from '../common/common.types';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private readonly rabbitMQService: RabbitmqService,
  ) {}

  async bookRoom(bookRoomData: BookRoomInput): Promise<DoneResponse> {
    const newBooking = await this.bookingRepository.create(bookRoomData);
    await this.bookingRepository.save(newBooking);
    await this.rabbitMQService.publishMessage('new_payment', {
      room: newBooking.room,
      user: newBooking.user,
      price: '200$',
      date: new Date().toISOString(),
    });
    return { done: true, message: 'Room booked successfully' };
  }
}
