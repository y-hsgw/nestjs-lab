import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];
}
