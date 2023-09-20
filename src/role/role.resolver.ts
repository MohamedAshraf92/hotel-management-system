import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Resolver()
export class RoleResolver {
  constructor(@Inject(RoleService) private roleService: RoleService) {}

  @Query(() => [Role])
  getAllRoles(): Promise<Role[]> {
    return this.roleService.getAllRoles();
  }

  @Mutation(() => Role)
  createRole(@Args('name') name: string): Promise<Role> {
    return this.roleService.createRole(name);
  }
}
