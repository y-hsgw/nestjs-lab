import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';
import { ApolloAppModule } from './graphql/apollo/apollo-app.module.js';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './basic/app.module.js';
import { MercuriusAppModule } from './graphql/mercurius/mercurius-app.module.js';
import { CommanderAppModule } from './commander/app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const applloApp = await NestFactory.create(ApolloAppModule);
  await applloApp.listen(3001);

  const mercuriusApp = await NestFactory.create(
    MercuriusAppModule,
    new FastifyAdapter(),
  );
  await mercuriusApp.listen(3002);

  await CommandFactory.run(CommanderAppModule, ['warn', 'error']);
}
void bootstrap();
