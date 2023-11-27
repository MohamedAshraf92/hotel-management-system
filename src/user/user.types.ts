import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Role } from '../role/role.entity';

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
  @IsNotEmpty()
  password: string;
}

@ObjectType()
export class SharedUser {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  adress: string;

  @Field(() => Role)
  role: string;
}

@ObjectType()
export class SignInResult {
  @Field()
  accessToken: string;

  @Field()
  user: SharedUser;
}

@ObjectType()
export class CreateUserResult {
  @Field()
  done: boolean;

  @Field()
  message: string;
}
