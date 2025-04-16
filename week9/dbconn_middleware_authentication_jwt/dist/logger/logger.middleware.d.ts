import { NestMiddleware } from '@nestjs/common';
export declare class LoggerMiddleware implements NestMiddleware {
    private token;
    constructor();
    use(req: any, res: any, next: () => void): any;
}
