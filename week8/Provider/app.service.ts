import { Injectable } from '@nestjs/common';
import { App } from './interface/app.interface';

@Injectable()
export class AppService {
  private readonly cats: App[] = [];

  create(cat: App) {
    this.cats.push(cat);
  }

  findAll(): App[] {
    return this.cats;
  }
}