// import { Controller, Get } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(): string {
//     return 'This action returns all cats';
//   }
// }

// import { Controller, Get, Query } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Query('age') age: string): string {
//     return `This action returns all cats of age: ${age}`;
//   }
// }

// import { Controller, Post, Body } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto): string {
//     return 'This action adds a new cat';
//   }
// }
