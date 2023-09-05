import { Module, forwardRef } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelResolver } from './holet.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { RoomModule } from '../room/room.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel]), forwardRef(() => RoomModule)],
  providers: [HotelResolver, HotelService],
  exports: [HotelResolver, HotelService, TypeOrmModule],
})
export class HotelModule {}
