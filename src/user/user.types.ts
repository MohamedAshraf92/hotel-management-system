import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { Role } from '../role/role.entity';

@InputType()
class RoleInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => ID)
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

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
  role: RoleInput;
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
export class User {
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
  role: Role;
}

@ObjectType()
export class SignInResult {
  @Field()
  accessToken: string;

  @Field()
  user: User;
}
