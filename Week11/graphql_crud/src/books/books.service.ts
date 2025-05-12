import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { AddBookArgs } from './args/add.book.args';


@Injectable()
export class BooksService {
  public booksdata: Book[]=[];

  addBook(addBookArgs: AddBookArgs): Book {
    const newBook = {
      id: addBookArgs.id, // Example ID generation
      title: addBookArgs.title,
      price: addBookArgs.price,
    };
    this.booksdata.push(newBook); // Assuming `this.books` is an array of books
    return newBook;
  }

  updateBook(id: number, updateBookArgs: AddBookArgs): Book {
    const bookIndex = this.booksdata.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new Error('Book not found');
    }
    this.booksdata[bookIndex] = { ...this.booksdata[bookIndex], ...updateBookArgs };
    return this.booksdata[bookIndex];
  }

  deleteBook(id: number): void {
    this.booksdata = this.booksdata.filter((book) => book.id !== id);
  }

  findByBookId(id:number): Book | undefined {
    for(let x=0; x<this.booksdata.length; x++){
      if(this.booksdata[x].id==id){
        return this.booksdata[x];
      }
    }
    return undefined;
  }

  findAllBooks():Book[]{
    return this.booksdata;
  }
}
