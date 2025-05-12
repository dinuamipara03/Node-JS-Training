import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { join } from 'path';
import {GraphQLModule} from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      definitions:{
        path:join(process.cwd(), 'src/graphql.ts'),
      }
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
