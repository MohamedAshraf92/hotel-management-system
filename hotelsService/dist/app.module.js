"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const hotel_module_1 = require("./hotel/hotel.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const room_module_1 = require("./room/room.module");
const role_module_1 = require("./role/role.module");
const user_module_1 = require("./user/user.module");
const user_service_1 = require("./user/user.service");
const booking_module_1 = require("./booking/booking.module");
const microservices_1 = require("@nestjs/microservices");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [user_module_1.UserModule],
                inject: [user_service_1.UserService],
                useFactory: (userService) => ({
                    autoSchemaFile: true,
                    context: async ({ req }) => {
                        var _a;
                        const accessToken = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '')) || '';
                        const user = await userService.validateUser(accessToken);
                        return { req, user };
                    },
                }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'hotels-database',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                autoLoadEntities: true,
                synchronize: true,
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'MATH_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'cats_queue',
                        queueOptions: {
                            durable: false,
                        },
                    },
                },
            ]),
            hotel_module_1.HotelModule,
            room_module_1.RoomModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
            booking_module_1.BookingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map