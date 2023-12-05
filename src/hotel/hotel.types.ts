import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, Max, Min } from 'class-validator';

@InputType()
export class CreateHotelInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @Min(1)
  @Max(5)
  @Field()
  stars: number;

  @IsNotEmpty()
  @Field()
  address: string;

  @IsNotEmpty()
  @Field()
  town: string;
}

@InputType()
export class UpdateHotelInput extends CreateHotelInput {
  @IsUUID()
  @Field()
  id: string;
}
