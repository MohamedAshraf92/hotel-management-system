import { UserService } from './user.service';
import { AuthCredentials, CreateUserInput, SignInResult } from './user.types';
import { DoneResponse } from '../common/common.types';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(createUserData: CreateUserInput): Promise<DoneResponse>;
    signIn(authCredentials: AuthCredentials): Promise<SignInResult>;
}
