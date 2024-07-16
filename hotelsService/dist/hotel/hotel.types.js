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
exports.UpdateHotelInput = exports.CreateHotelInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateHotelInput = class CreateHotelInput {
};
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHotelInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHotelInput.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateHotelInput.prototype, "stars", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHotelInput.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHotelInput.prototype, "town", void 0);
CreateHotelInput = __decorate([
    (0, graphql_1.InputType)()
], CreateHotelInput);
exports.CreateHotelInput = CreateHotelInput;
let UpdateHotelInput = class UpdateHotelInput extends CreateHotelInput {
};
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateHotelInput.prototype, "id", void 0);
UpdateHotelInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateHotelInput);
exports.UpdateHotelInput = UpdateHotelInput;
//# sourceMappingURL=hotel.types.js.map