import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  #posts = [
    { id: 1, title: 'sample1', votes: 12 },
    { id: 1, title: 'sample2' },
    { id: 2, title: 'example' },
  ];

  constructor() {}

  async findAll(option?: { authorId: number }) {
    return this.#posts.filter((post) => post.id === option?.authorId);
  }
}
