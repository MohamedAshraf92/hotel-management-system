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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const typeorm_1 = require("typeorm");
const room_entity_1 = require("../room/room.entity");
const user_entity_1 = require("../user/user.entity");
const graphql_1 = require("@nestjs/graphql");
const user_types_1 = require("../user/user.types");
let Booking = class Booking {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Booking.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Booking.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => room_entity_1.Room),
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, (room) => room.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'room', referencedColumnName: 'id' }),
    __metadata("design:type", String)
], Booking.prototype, "room", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_types_1.SharedUser),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user', referencedColumnName: 'id' }),
    __metadata("design:type", String)
], Booking.prototype, "user", void 0);
Booking = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.entity.js.map