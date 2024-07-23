import { Module } from '@nestjs/common';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { RabbitMQModule } from '../rabbitmq/rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), RabbitMQModule],
  providers: [BookingResolver, BookingService],
  exports: [TypeOrmModule, BookingService],
})
export class BookingModule {}
