import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  AuthCredentials,
  CreateUserInput,
  SignInResult,
  User,
} from './user.types';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => SignInResult)
  signIn(
    @Args('authCredentials') authCredentials: AuthCredentials,
  ): Promise<SignInResult> {
    return this.userService.signin(authCredentials);
  }
}
