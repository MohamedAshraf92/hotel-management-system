import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthCredentials, CreateUserInput, SignInResult } from './user.types';
import { JwtService } from '@nestjs/jwt';
import { DoneResponse } from '../common/common.types';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    createUser(createUserData: CreateUserInput): Promise<DoneResponse>;
    validateUser(accessToken: string): Promise<User>;
    signin(authCredentials: AuthCredentials): Promise<SignInResult>;
}
