import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsUUID } from 'class-validator';

@InputType()
export class BookRoomInput {
  @Field()
  @IsDate()
  startDate: Date;

  @Field()
  @IsDate()
  endDate: Date;

  @Field()
  @IsUUID()
  room: string;

  @Field()
  @IsUUID()
  guest: string;
}
