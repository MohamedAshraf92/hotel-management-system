import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { AuthCredentials, CreateUserInput, SignInResult } from './user.types';
import { DoneResponse } from '../common/common.types';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => DoneResponse)
  createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<DoneResponse> {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => SignInResult)
  signIn(
    @Args('authCredentials') authCredentials: AuthCredentials,
  ): Promise<SignInResult> {
    return this.userService.signin(authCredentials);
  }
}
