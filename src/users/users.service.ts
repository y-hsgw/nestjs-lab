import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findAll() {
    return await this.userRepository.find();
  }
}
