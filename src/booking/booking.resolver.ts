import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Booking } from './booking.entity';
import { BookRoomInput } from './booking.types';
import { BookingService } from './booking.service';

@Resolver()
export class BookingResolver {
  constructor(private bookingService: BookingService) {}

  @Mutation(() => Booking)
  bookRoom(
    @Args('bookRoomData') bookRoomData: BookRoomInput,
  ): Promise<Booking> {
    return this.bookingService.bookRoom(bookRoomData);
  }
}
