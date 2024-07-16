"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hotel_entity_1 = require("./hotel.entity");
const typeorm_2 = require("typeorm");
let HotelService = class HotelService {
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    async getAllHotels() {
        const hotels = await this.hotelRepository.find();
        return hotels;
    }
    async getHotelById(id) {
        const hotel = await this.hotelRepository.findOneBy({ id });
        return hotel;
    }
    async createHotel(createHotelData) {
        const createdHotel = await this.hotelRepository.create(createHotelData);
        await this.hotelRepository.save(createdHotel);
        return createdHotel;
    }
    async updateHotel(updatedHotelData) {
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
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map