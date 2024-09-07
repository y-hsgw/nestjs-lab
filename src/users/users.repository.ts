import { Injectable } from '@nestjs/common';
import mysql2, { Connection } from 'mysql2/promise';
import { User } from './interfaces/user.interface.js';

@Injectable()
export class UsersRepository {
  #connection!: Connection;

  constructor() {}

  async init() {
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

  async delete(userId: User['id']) {
    const [results] = await this.#connection.query(
      `DELETE FROM users WHERE id = ${userId}`,
    );
    console.log(results);
  }
}
