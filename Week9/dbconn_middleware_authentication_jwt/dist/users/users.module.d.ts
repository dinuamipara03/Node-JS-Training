import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
    controllers: [UsersController];
    providers: [UsersService];
}
