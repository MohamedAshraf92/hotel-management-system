import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from '../hotel/hotel.entity';

@Entity()
@ObjectType()
export class Room {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  number: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  class: string;

  @Field()
  @Column({ default: false })
  booked: boolean;

  @Field(() => Hotel)
  @ManyToOne(() => Hotel, (hotel: Hotel) => hotel.id, { eager: true })
  hotel: string;
}
