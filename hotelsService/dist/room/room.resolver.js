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
exports.RoomResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const room_service_1 = require("./room.service");
const room_entity_1 = require("./room.entity");
const room_types_1 = require("./room.types");
const common_1 = require("@nestjs/common");
const authGuard_1 = require("../user/authGuard");
const common_types_1 = require("../common/common.types");
let RoomResolver = class RoomResolver {
    constructor(roomService) {
        this.roomService = roomService;
    }
    getHotelRooms(hotelId) {
        return this.roomService.getHotelRooms(hotelId);
    }
    getRoomById(id) {
        return this.roomService.getRoomById(id);
    }
    findAvailableRooms(availableRoomData) {
        return this.roomService.findAvailableRooms(availableRoomData);
    }
    createRoom(createRoomData) {
        return this.roomService.createRoom(createRoomData);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [room_entity_1.Room]),
    __param(0, (0, graphql_1.Args)('hotelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getHotelRooms", null);
__decorate([
    (0, graphql_1.Query)(() => room_entity_1.Room),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRoomById", null);
__decorate([
    (0, graphql_1.Query)(() => [room_entity_1.Room]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_types_1.AvailableRoomInput]),
    __metadata("design:returntype", void 0)
], RoomResolver.prototype, "findAvailableRooms", null);
__decorate([
    (0, common_1.UseGuards)(authGuard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => common_types_1.DoneResponse),
    __param(0, (0, graphql_1.Args)('createRoomData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_types_1.CreateRoomInput]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
RoomResolver = __decorate([
    (0, graphql_1.Resolver)(() => room_entity_1.Room),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomResolver);
exports.RoomResolver = RoomResolver;
//# sourceMappingURL=room.resolver.js.map