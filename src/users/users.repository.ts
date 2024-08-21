import { Injectable } from '@nestjs/common';
import * as mysql2 from 'mysql2/promise';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  #connection: mysql2.Connection;

  constructor() {
    this.#build();
  }

  async #build() {
    this.#connection = await mysql2.createConnection({
      host: 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'my_app_database',
    });
  }

  async find() {
    const [results] = await this.#connection.query('SELECT * FROM users');
    console.log(results);
    return results;
  }

  async create(user: Omit<User, 'id'>) {
    const [results] = await this.#connection.query(
      `INSERT INTO users (name) VALUES ('${user.name}')`,
    );
    console.log(results);
  }

  async update(user: User) {
    const [results] = await this.#connection.query(
      `UPDATE users SET name = '${user.name}' WHERE id = ${user.id}`,
    );
    console.log(results);
  }
}
