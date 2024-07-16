import { RoleService } from './role.service';
import { Role } from './role.entity';
export declare class RoleResolver {
    private roleService;
    constructor(roleService: RoleService);
    getAllRoles(): Promise<Role[]>;
    createRole(name: string): Promise<Role>;
}
