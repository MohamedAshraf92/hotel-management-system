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
exports.BookingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const booking_types_1 = require("./booking.types");
const booking_service_1 = require("./booking.service");
const common_types_1 = require("../common/common.types");
let BookingResolver = class BookingResolver {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    bookRoom(bookRoomData) {
        return this.bookingService.bookRoom(bookRoomData);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => common_types_1.DoneResponse),
    __param(0, (0, graphql_1.Args)('bookRoomData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_types_1.BookRoomInput]),
    __metadata("design:returntype", Promise)
], BookingResolver.prototype, "bookRoom", null);
BookingResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingResolver);
exports.BookingResolver = BookingResolver;
//# sourceMappingURL=booking.resolver.js.map