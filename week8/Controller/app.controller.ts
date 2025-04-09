// import { Controller, Get, Post, Put, Delete } from '@nestjs/common';


// @Controller('cats')
// export class AppController {
//   @Post('/create')
//   create(): string {
//     return 'This action adds a new cat';
//   }
  
//   @Get('/get')
//   getHello(): string {
//     return 'This action returns all cats';
//   }

//   @Put('/update')
//   update(): string {
//     return 'This action updates a cat';
//   }

//   @Delete('/delete')
//   remove(): string {
//     return 'This action removes a cat';
//   }
// }


// import { Controller, Get, Req, Post,HttpCode, Header, Redirect, Query, Param, Body } from '@nestjs/common';
// import { Request } from 'express';
// import { CreateAppDto } from './create-app.dto';

// @Controller('cat')
// export class AppController {
  //request object
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }

//wildcard
//   @Get('ab{*splat}cd')
// findAll() {
//   return 'This route uses a wildcard';
// }

//status code
//@Post('/create')
// @HttpCode(204)
// @Header('Cache-Control', 'no-store')  // response header
// create():string {
//   return 'This action adds a new cat';
// }

//redirection
// @Get()
// @Redirect('https://nestjs.com', 301)
// redirectToDocs(): void {
//   // This method is required for the decorator to work
// }

// @Get('docs')
// @Redirect('https://docs.nestjs.com', 302)
// getDocs(@Query('version') version) {
//   if (version && version === '5') {
//     return { url: 'https://docs.nestjs.com/v5/' };
//   }
// }

//Route parameters
// @Get(':id')
// findOne(@Param() params: any): string {
//   console.log(params.id);
//   return `This action returns a ${params.id} cat`;
// }
// @Get(':id')
// findOne1(@Param('id') id: string): string {
//   return `This action returns a #${id} cat`;
// }
// }



// @Controller({ host: 'admin.example.com' })
// export class AppController {
//   // @Get()
  // index(): string {
  //   return 'Admin page';
  // }

//   @Post('/:id')
// async create(@Body() createCatDto: CreateAppDto) {
//   return 'This action adds a new cat';
// }

// @Get()
// async findAll(@Query('age') age: number, @Query('breed') breed: string) {
//   return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
// }
// }



import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class AppController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }
}