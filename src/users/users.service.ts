import { Injectable, OnModuleInit } from '@nestjs/common';
import { UsersRepository } from './users.repository.js';
import { User } from './interfaces/user.interface.js';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(private readonly userRepository: UsersRepository) {}

  async onModuleInit() {
    await this.userRepository.init();
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async create(user: Omit<User, 'id'>) {
    await this.userRepository.create(user);
  }

  async update(user: User) {
    await this.userRepository.update(user);
  }

  async delete(userId: User['id']) {
    await this.userRepository.delete(userId);
  }
}
