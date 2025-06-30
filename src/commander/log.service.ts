import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  log(...args: unknown[]): void {
    console.log(...args);
  }
}
