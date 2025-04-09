import { Module } from '@nestjs/common';
import { F3Module } from './f3.module';
@Module({
    imports: [F3Module],
    controllers: [],
    providers: [],
    exports: [],
})
export class ChatsModule {
    constructor() {
        console.log('ChatsModule initialized');
    }
}
