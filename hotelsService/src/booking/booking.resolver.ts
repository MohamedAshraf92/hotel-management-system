import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BookRoomInput } from './booking.types';
import { BookingService } from './booking.service';
import { DoneResponse } from '../common/common.types';

@Resolver()
export class BookingResolver {
  constructor(private bookingService: BookingService) {}

  @Mutation(() => DoneResponse)
  bookRoom(
    @Args('bookRoomData') bookRoomData: BookRoomInput,
  ): Promise<DoneResponse> {
    return this.bookingService.bookRoom(bookRoomData);
  }
}
