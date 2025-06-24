import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '投稿情報' })
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  votes?: number;
}
