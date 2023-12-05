import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { Repository } from 'typeorm';
import { CreateHotelInput, UpdateHotelInput } from './hotel.types';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel) private hotelRepository: Repository<Hotel>,
  ) {}

  async getAllHotels(): Promise<Hotel[]> {
    const hotels = await this.hotelRepository.find();
    return hotels;
  }

  async getHotelById(id: string): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOneBy({ id });
    return hotel;
  }

  async createHotel(createHotelData: CreateHotelInput): Promise<Hotel> {
    const createdHotel = await this.hotelRepository.create(createHotelData);
    await this.hotelRepository.save(createdHotel);
    return createdHotel;
  }

  async updateHotel(updatedHotelData: UpdateHotelInput): Promise<Hotel> {
    const { id, name, address, stars, description, town } = updatedHotelData;
    const updatedHotel = await this.getHotelById(id);
    updatedHotel.name = name;
    updatedHotel.address = address;
    updatedHotel.description = description;
    updatedHotel.stars = stars;
    updatedHotel.town = town;

    await this.hotelRepository.save(updatedHotel);
    return updatedHotel;
  }
}
