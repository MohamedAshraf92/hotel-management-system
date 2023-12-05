import { ArgsType, Field, ID, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString, IsUUID, Min } from 'class-validator';

@InputType()
export class CreateRoomInput {
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

@ArgsType()
export class AvailableRoomInput {
  @Field()
  @IsDate()
  startDate: Date;

  @Field()
  @IsDate()
  endDate: Date;

  @Field()
  @IsString()
  town: string;

  @Field()
  @IsString()
  roomType: string;
}
