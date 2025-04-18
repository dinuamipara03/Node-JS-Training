import { Controller, Get, Patch, Param, Body, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
@Get('profile')
async getProfile(@Request() req) {
  return this.usersService.findById(req.user.id);
}

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './src/uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + extname(file.originalname));
      }
    }),
  }))
  async updateUser(@Param('id') id: number, @Body() body, @UploadedFile() file: Express.Multer.File) {
    const updateData = { ...body };
    if (file) {
      updateData.photo = file.filename;
    }
    return this.usersService.updateUser(id, updateData);
  }
}
