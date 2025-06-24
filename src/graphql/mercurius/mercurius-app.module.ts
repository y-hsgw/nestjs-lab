import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AuthorsModule } from '../common/authors/authors.module.js';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: path.join(
        process.cwd(),
        'src/graphql/mercurius/schema.gql',
      ),
      sortSchema: true,
      graphiql: true,
    }),
    AuthorsModule,
  ],
})
export class MercuriusAppModule {}
