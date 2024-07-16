import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async getAllRoles(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async getRoleById(id: string): Promise<Role> {
    return this.roleRepository.findOneBy({ id });
  }

  async createRole(name: string): Promise<Role> {
    const createdRole = await this.roleRepository.create({ name });
    await this.roleRepository.save(createdRole);
    return createdRole;
  }
}
