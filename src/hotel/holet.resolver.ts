import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateHotelInput, UpdateHotelInput } from './hotel.types';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/authGuard';

@Resolver()
export class HotelResolver {
  constructor(private hotelService: HotelService) {}

  @Query(() => [Hotel])
  getAllHotels(): Promise<Hotel[]> {
    return this.hotelService.getAllHotels();
  }

  @UseGuards(AuthGuard)
  @Query(() => Hotel)
  getHotelById(@Args('id') id: string): Promise<Hotel> {
    return this.hotelService.getHotelById(id);
  }

  @Mutation(() => Hotel)
  createHotel(@Args('createHotelData') createHotelData: CreateHotelInput) {
    return this.hotelService.createHotel(createHotelData);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Hotel)
  updateHotel(@Args('updatedHotelData') updatedHotelData: UpdateHotelInput) {
    return this.hotelService.updateHotel(updatedHotelData);
  }
}
