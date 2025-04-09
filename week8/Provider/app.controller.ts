
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAppDto } from './create-app.dto';
import { AppService } from './app.service';
import { App } from './interface/app.interface';

@Controller('App')
export class AppController {
  constructor(private AppService: AppService) {}

  @Post()
  async create(@Body() createAppDto: CreateAppDto) {
    this.AppService.create(createAppDto);
  }

  @Get()
  async findAll(): Promise<App[]> {
    return this.AppService.findAll();
  }
}
