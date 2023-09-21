import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsUUID, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(8, 16)
  password: string;

  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsNotEmpty()
  adress: string;

  @Field()
  @IsUUID()
  role: string;
}
