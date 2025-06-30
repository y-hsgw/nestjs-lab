import { Module } from '@nestjs/common';
import { BasicCommand } from './basic.command.js';
import { LogService } from './log.service.js';

@Module({
  providers: [BasicCommand, LogService],
})
export class CommanderAppModule {}
