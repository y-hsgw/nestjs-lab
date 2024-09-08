import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service.js';
import { AuthorsResolver } from './authors.resolver.js';
import { PostsModule } from '../post/posts.module.js';
import { CommentsModule } from '../comments/comments.module.js';

@Module({
  imports: [PostsModule, CommentsModule],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
