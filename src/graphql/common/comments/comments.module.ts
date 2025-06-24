import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service.js';

@Module({
  exports: [CommentsService],
  providers: [CommentsService],
})
export class CommentsModule {}
