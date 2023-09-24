import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentials, CreateUserInput, SignInResult } from './user.types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
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
    const createdUser = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    return await this.userRepository.save(createdUser);
  }

  async signin(authCredentials: AuthCredentials): Promise<SignInResult> {
    const { email, password } = authCredentials;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ email })
      .getOne();
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email, id: user.id };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken, user };
    } else {
      throw new UnauthorizedException('Username or Password incorrect!');
    }
  }
}
