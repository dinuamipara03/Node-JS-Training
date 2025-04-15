import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @Get(':id')
// async getHello(@Param('id', ParseIntPipe) id: number) {
//   return this.appService.getHello(id);
// }

// @Get(':id')
// async getHello(@Param('id', ParseBoolPipe) id: number) {
//   return this.appService.getHello(id);
// }


@Get(':id')
async getHello(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  id: number,
) {
  return this.appService.getHello(id);
}
}
