import { Injectable } from '@nestjs/common';

interface Comment {
  id: number;
  postId: number;
  content: string;
}

@Injectable()
export class CommentsService {
  #comments: Comment[] = [
    { id: 1, postId: 1, content: 'hello' },
    { id: 2, postId: 1, content: 'nice' },
    { id: 3, postId: 2, content: 'happy' },
  ];

  addComment(comment: Omit<Comment, 'id'>) {
    const ids = this.#comments.map((comment) => comment.id);
    const newId = Math.max(...ids) + 1;
    const nerComment = { ...comment, id: newId };
    this.#comments.push(nerComment);
    return nerComment;
  }
}
