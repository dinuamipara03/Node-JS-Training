import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports: [],
})
export class UsersModule {
    constructor() {
        console.log('UsersModule initialized');
    }
}
