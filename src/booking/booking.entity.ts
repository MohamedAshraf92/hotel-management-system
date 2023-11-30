import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from '../room/room.entity';
import { User } from '../user/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { SharedUser } from '../user/user.types';

@Entity()
@ObjectType()
export class Booking {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  startDate: Date;

  @Field()
  @Column()
  endDate: Date;

  @Field(() => Room)
  @ManyToOne(() => Room, (room: Room) => room.id, { eager: true })
  @JoinColumn({ name: 'room', referencedColumnName: 'id' })
  room: string;

  @Field(() => SharedUser)
  @ManyToOne(() => User, (user: User) => user.id, { eager: true })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user: string;
}
