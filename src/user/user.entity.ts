import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity()
export class UserEnity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  adress: string;

  @ManyToOne(() => Role, (role: Role) => role.id, { eager: true })
  @JoinColumn({ name: 'role', referencedColumnName: 'id' })
  role: Role;
}
