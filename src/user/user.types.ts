import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { User } from './user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @Length(8, 16)
  password: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  adress: string;

  @Field()
  @IsString()
  @IsUUID()
  role: string;
}

@InputType()
export class AuthCredentials {
  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;
}

@ObjectType()
export class SignInResult {
  @Field()
  accessToken: string;

  @Field()
  user: User;
}
