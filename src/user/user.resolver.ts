import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthCredentials, CreateUserInput, SignInResult } from './user.types';
import { RoleService } from '../role/role.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
  ) {}

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

  @ResolveField('role')
  async role(@Parent() user: User) {
    return await this.roleService.getRoleById(user.role);
  }
}
