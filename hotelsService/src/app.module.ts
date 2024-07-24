import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { BookingModule } from './booking/booking.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [UserModule],
      inject: [UserService],
      useFactory: (userService: UserService) => ({
        autoSchemaFile: true,
        context: async ({ req }) => {
          const accessToken =
            req.headers.authorization?.replace('Bearer ', '') || '';
          const user = await userService.validateUser(accessToken);
          return { req, user };
        },
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hotels-database',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HotelModule,
    RoomModule,
    RoleModule,
    UserModule,
    BookingModule,
    RabbitmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
