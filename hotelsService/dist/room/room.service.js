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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("./room.entity");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("../booking/booking.entity");
let RoomService = class RoomService {
    constructor(roomRepository, bookingRepository) {
        this.roomRepository = roomRepository;
        this.bookingRepository = bookingRepository;
    }
    async getHotelRooms(hotelId) {
        const rooms = await this.roomRepository
            .createQueryBuilder('room')
            .where({ hotel: hotelId })
            .leftJoinAndSelect('room.hotel', 'hotel')
            .getMany();
        return rooms;
    }
    async getRoomById(id) {
        const room = await this.roomRepository
            .createQueryBuilder('room')
            .where({ id })
            .getOne();
        return room;
    }
    async createRoom(createRoomData) {
        const { hotel, number } = createRoomData;
        const roomWithSameNumber = await this.roomRepository
            .createQueryBuilder('room')
            .where({ hotel, number })
            .getOne();
        if (roomWithSameNumber) {
            throw new common_1.BadRequestException('A room with the same number exists');
        }
        const createdRoom = await this.roomRepository.create(createRoomData);
        await this.roomRepository.save(createdRoom);
        return { done: true, message: 'Room created successfully' };
    }
    async findAvailableRooms(availableRoomData) {
        const { startDate, endDate, town, roomType } = availableRoomData;
        const bookings = await this.bookingRepository
            .createQueryBuilder('booking')
            .where({
            startDate: (0, typeorm_2.MoreThanOrEqual)(startDate),
            endDate: (0, typeorm_2.LessThanOrEqual)(endDate),
        })
            .leftJoinAndSelect('booking.room', 'room')
            .getMany();
        const bookedRoomsIds = bookings.map((b) => b.room.id);
        const availableRooms = await this.roomRepository
            .createQueryBuilder('room')
            .where({ id: (0, typeorm_2.Not)((0, typeorm_2.In)(bookedRoomsIds)), type: roomType })
            .leftJoinAndSelect('room.hotel', 'hotel')
            .andWhere({ hotel: { town } })
            .getMany();
        return availableRooms;
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __param(1, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map