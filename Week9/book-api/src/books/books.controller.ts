import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  getBook(@Param('id') id: string): Book | null {
    return this.booksService.findOne(Number(id));
  }

  @Post()
  addBook(@Body() book: Book): Book {
    return this.booksService.create(book);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() book: Partial<Book>): Book | null {
    return this.booksService.update(Number(id), book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): { message: string } {
    this.booksService.delete(Number(id));
    return { message: 'Book deleted successfully' };
  }
}
