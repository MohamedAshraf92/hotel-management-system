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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    async createUser(createUserData) {
        const { password } = createUserData, data = __rest(createUserData, ["password"]);
        try {
            const hashedPassword = await this.hashPassword(password);
            const createdUser = this.userRepository.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
            await this.userRepository.save(createdUser);
            return { done: true, message: 'User created successfully' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async validateUser(accessToken) {
        if (accessToken) {
            const { id } = await this.jwtService.verify(accessToken);
            const user = await this.userRepository
                .createQueryBuilder('user')
                .where({ id })
                .leftJoinAndSelect('user.role', 'role')
                .getOne();
            return user;
        }
        return null;
    }
    async signin(authCredentials) {
        const { email, password } = authCredentials;
        const user = await this.userRepository
            .createQueryBuilder('user')
            .where({ email })
            .leftJoinAndSelect('user.role', 'role')
            .getOne();
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { id: user.id };
            const accessToken = await this.jwtService.sign(payload);
            const { password } = user, userData = __rest(user, ["password"]);
            return { accessToken, user: userData };
        }
        else {
            throw new common_1.UnauthorizedException('Username or Password incorrect!');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map