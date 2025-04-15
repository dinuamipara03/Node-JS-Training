import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(_id:number): string {
    return 'Hello World!';
  }
}
