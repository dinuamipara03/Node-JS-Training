// import { Module } from '@nestjs/common';
// //import { AppController } from './app.controller';
// import { AppService } from './app.service';
// //import { CatsController } from './cats/cats.controller';

// @Module({
//   imports: [],
//   //controllers: [AppController, CatsController],
//   providers: [AppService],
// })
// export class AppModule {}

// import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { LoggerMiddleware } from './logger.middleware';

// @Module({   controllers: [AppController], })
// export class CatsModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes(AppController);
//   }
// }
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testing',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [UsersController],
})
export class AppModule {}
