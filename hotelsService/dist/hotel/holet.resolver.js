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
exports.HotelResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const hotel_types_1 = require("./hotel.types");
const hotel_service_1 = require("./hotel.service");
const hotel_entity_1 = require("./hotel.entity");
const common_1 = require("@nestjs/common");
const authGuard_1 = require("../user/authGuard");
let HotelResolver = class HotelResolver {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    getAllHotels() {
        return this.hotelService.getAllHotels();
    }
    getHotelById(id) {
        return this.hotelService.getHotelById(id);
    }
    createHotel(createHotelData) {
        return this.hotelService.createHotel(createHotelData);
    }
    updateHotel(updatedHotelData) {
        return this.hotelService.updateHotel(updatedHotelData);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [hotel_entity_1.Hotel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "getAllHotels", null);
__decorate([
    (0, graphql_1.Query)(() => hotel_entity_1.Hotel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "getHotelById", null);
__decorate([
    (0, common_1.UseGuards)(authGuard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => hotel_entity_1.Hotel),
    __param(0, (0, graphql_1.Args)('createHotelData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hotel_types_1.CreateHotelInput]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "createHotel", null);
__decorate([
    (0, common_1.UseGuards)(authGuard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => hotel_entity_1.Hotel),
    __param(0, (0, graphql_1.Args)('updatedHotelData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hotel_types_1.UpdateHotelInput]),
    __metadata("design:returntype", void 0)
], HotelResolver.prototype, "updateHotel", null);
HotelResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], HotelResolver);
exports.HotelResolver = HotelResolver;
//# sourceMappingURL=holet.resolver.js.map