import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatsModule } from './chats.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule initialized');
  }
}



// dynamic module
// export class DatabaseModule {
//   static forRoot(entities = [], options?): DynamicModule {
//     const providers = createDatabaseProviders(options, entities);
//     return {
//       module: DatabaseModule,
//       providers: providers,
//       exports: providers,
//     };
//   }
// }