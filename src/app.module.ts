import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CatsModule } from './cats/cat.module.js';
import { LoggerMiddleware } from './logger.middleware.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [ConfigModule.forRoot(), CatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'graphql', method: RequestMethod.POST },
      );
  }
}
