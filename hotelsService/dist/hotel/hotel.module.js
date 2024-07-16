"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModule = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("./hotel.service");
const holet_resolver_1 = require("./holet.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const hotel_entity_1 = require("./hotel.entity");
const room_module_1 = require("../room/room.module");
let HotelModule = class HotelModule {
};
HotelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hotel_entity_1.Hotel]), (0, common_1.forwardRef)(() => room_module_1.RoomModule)],
        providers: [holet_resolver_1.HotelResolver, hotel_service_1.HotelService],
        exports: [holet_resolver_1.HotelResolver, hotel_service_1.HotelService, typeorm_1.TypeOrmModule],
    })
], HotelModule);
exports.HotelModule = HotelModule;
//# sourceMappingURL=hotel.module.js.map