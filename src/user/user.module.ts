import { Module, forwardRef } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEnity } from './user.entity';
import { RoleModule } from '../role/role.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEnity]),
    forwardRef(() => RoleModule),
    JwtModule.register({
      global: true,
      secret: 'this is top secret string',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
