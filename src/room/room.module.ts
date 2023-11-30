import { Module, forwardRef } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { HotelModule } from '../hotel/hotel.module';
import { BookingModule } from '../booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room]),
    forwardRef(() => HotelModule),
    forwardRef(() => BookingModule),
  ],
  providers: [RoomService, RoomResolver],
  exports: [TypeOrmModule, RoomService, RoomResolver],
})
export class RoomModule {}
