import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, Min } from 'class-validator';

@InputType()
export class createRoomInput {
  @Field()
  @Min(1)
  number: number;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  type: string;

  @Field()
  @IsNotEmpty()
  class: string;

  @Field(() => ID)
  @IsUUID()
  hotel: string;
}
