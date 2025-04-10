import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './app.middleware';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(logger)
      // .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({
      //   path: 'abcd/*splat',
      //   method: RequestMethod.ALL,
      // });
      // .forRoutes(AppController);
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/{*splat}',
      // )
      // .forRoutes(AppController);

      consumer
  .apply(logger)
  .forRoutes(AppController);
  }
}