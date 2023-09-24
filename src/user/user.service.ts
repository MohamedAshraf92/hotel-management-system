import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './user.types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
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
}
