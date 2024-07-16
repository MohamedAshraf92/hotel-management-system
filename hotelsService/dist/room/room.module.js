"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const room_resolver_1 = require("./room.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("./room.entity");
const hotel_module_1 = require("../hotel/hotel.module");
const booking_module_1 = require("../booking/booking.module");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room]),
            (0, common_1.forwardRef)(() => hotel_module_1.HotelModule),
            (0, common_1.forwardRef)(() => booking_module_1.BookingModule),
        ],
        providers: [room_service_1.RoomService, room_resolver_1.RoomResolver],
        exports: [typeorm_1.TypeOrmModule, room_service_1.RoomService, room_resolver_1.RoomResolver],
    })
], RoomModule);
exports.RoomModule = RoomModule;
//# sourceMappingURL=room.module.js.map