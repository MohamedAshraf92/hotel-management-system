import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  AuthCredentials,
  CreateUserInput,
  SignInResult,
  SharedUser,
} from './user.types';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<SharedUser> {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => SignInResult)
  signIn(
    @Args('authCredentials') authCredentials: AuthCredentials,
  ): Promise<SignInResult> {
    return this.userService.signin(authCredentials);
  }
}
