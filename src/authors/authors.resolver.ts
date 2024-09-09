import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Author } from './models/author.model.js';
import { AuthorsService } from './authors.service.js';
import { PostsService } from '../post/posts.service.js';
import { Post } from '../post/models/post.model.js';
import { GetAuthorArgs } from './dto/get-author-args.js';
import { PubSub } from 'graphql-subscriptions';
import { CommentsService } from '../comments/comments.service.js';
import { Comment } from '../comments/model/comment.model.js';
import { CommentInput } from './dto/comment.input.js';

const pubSub = new PubSub();

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
    private commentsService: CommentsService,
  ) {}

  @Query(() => Author, { name: 'author', description: '著者', nullable: true })
  getAuthor(@Args() { id }: GetAuthorArgs) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts', () => [Post], { description: '投稿リスト' })
  getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  @Mutation(() => Comment)
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment') comment: CommentInput,
  ) {
    const newComment = this.commentsService.addComment({
      postId,
      content: comment.content,
    });
    await pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }

  @Mutation(() => Post, { nullable: true })
  upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    this.postsService.upvoteById({ id: postId });
    return this.postsService.findOne(postId);
  }

  @Subscription(() => Comment)
  commentAdded() {
    return pubSub.asyncIterator('commentAdded');
  }
}
