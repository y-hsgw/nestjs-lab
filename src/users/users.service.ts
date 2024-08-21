import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async create(user: Omit<User, 'id'>) {
    await this.userRepository.create(user);
  }

  async update(user: User) {
    await this.userRepository.update(user);
  }
}
