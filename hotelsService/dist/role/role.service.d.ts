import { Role } from './role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    getAllRoles(): Promise<Role[]>;
    getRoleById(id: string): Promise<Role>;
    createRole(name: string): Promise<Role>;
}
