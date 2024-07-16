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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_types_1 = require("./user.types");
const common_types_1 = require("../common/common.types");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserData) {
        return this.userService.createUser(createUserData);
    }
    signIn(authCredentials) {
        return this.userService.signin(authCredentials);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => common_types_1.DoneResponse),
    __param(0, (0, graphql_1.Args)('createUserData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_types_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.SignInResult),
    __param(0, (0, graphql_1.Args)('authCredentials')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_types_1.AuthCredentials]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signIn", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map