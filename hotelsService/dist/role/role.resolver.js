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
exports.RoleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const role_service_1 = require("./role.service");
const role_entity_1 = require("./role.entity");
let RoleResolver = class RoleResolver {
    constructor(roleService) {
        this.roleService = roleService;
    }
    getAllRoles() {
        return this.roleService.getAllRoles();
    }
    createRole(name) {
        return this.roleService.createRole(name);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [role_entity_1.Role]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "getAllRoles", null);
__decorate([
    (0, graphql_1.Mutation)(() => role_entity_1.Role),
    __param(0, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "createRole", null);
RoleResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleResolver);
exports.RoleResolver = RoleResolver;
//# sourceMappingURL=role.resolver.js.map