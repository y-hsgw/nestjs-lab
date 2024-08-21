import { Injectable } from '@nestjs/common';
import * as mysql2 from 'mysql2';

@Injectable()
export class AppService {
  getHello(): string {
    const connection = mysql2.createConnection({
      host: 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'my_app_database',
    });

    connection.connect((err) => {
      if (err) {
        console.log('error connecting: ' + err.stack);
        return;
      }
      console.log('success');
    });

    connection.query('SELECT * FROM users', (error, results) => {
      console.log(results);
    });

    return 'Hello World!';
  }
}
