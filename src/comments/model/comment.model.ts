import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  postId: number;

  @Field()
  text: string;
}
