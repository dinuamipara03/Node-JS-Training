import { Injectable } from '@nestjs/common';
import { Book } from './books.model';

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, title: 'NestJS Basics', author: 'John Doe' },
    { id: 2, title: 'Advanced NestJS', author: 'Jane Smith' }
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | null {
    const book = this.books.find(book => book.id === id);
    return book || null;
  }

  create(book: Book): Book {
    this.books.push(book);
    return book;
  }

  update(id: number, updatedBook: Partial<Book>): Book | null {
    const book = this.findOne(id);
    if (book) {
      Object.assign(book, updatedBook);
    }
    return book;
  }

  delete(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}
