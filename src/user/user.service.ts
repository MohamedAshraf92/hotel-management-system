import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEnity } from './user.entity';
import { Repository } from 'typeorm';
import {
  AuthCredentials,
  CreateUserInput,
  SignInResult,
  User,
} from './user.types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEnity) private userRepository: Repository<UserEnity>,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async createUser(createUserData: CreateUserInput): Promise<User> {
    const { password, ...data } = createUserData;
    const hashedPassword = await this.hashPassword(password);
    const newUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async validateUser(accessToken: string): Promise<User> {
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

  async signin(authCredentials: AuthCredentials): Promise<SignInResult> {
    const { email, password } = authCredentials;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ email })
      .leftJoinAndSelect('user.role', 'role')
      .getOne();
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken, user };
    } else {
      throw new UnauthorizedException('Username or Password incorrect!');
    }
  }
}
