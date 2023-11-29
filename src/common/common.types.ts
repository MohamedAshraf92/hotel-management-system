import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DoneResponse {
  @Field()
  done: boolean;

  @Field()
  message: string;
}
