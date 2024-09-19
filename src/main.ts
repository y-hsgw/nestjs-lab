import { NestFactory } from '@nestjs/core';
import { ApolloAppModule } from './apollo/apollo-app.module.js';
import { AppModule } from './basic/app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const apolloApp = await NestFactory.create(ApolloAppModule);
  await apolloApp.listen(3001);
}
void bootstrap();
