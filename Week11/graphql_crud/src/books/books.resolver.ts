import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book as BookModel} from '../graphql'
import { Book } from './schema/book.schema';
import { AddBookArgs } from './args/add.book.args';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book)
  createBook(@Args('addBookArgs') addBookArgs: AddBookArgs): Book {
    return this.booksService.addBook(addBookArgs);
  }

  @Query(() => [Book], { name: 'books' })
  getAllBook():BookModel[] {
    return this.booksService.findAllBooks();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('bookId', { type: () => Int }) id: number):BookModel | undefined {
    return this.booksService.findByBookId(id);
  }

  @Mutation(() => Book)
updateBook(
  @Args('bookId', { type: () => Int }) id: number,
  @Args('updateBookArgs') updateBookArgs: AddBookArgs
): Book {
  return this.booksService.updateBook(id, updateBookArgs);
}

@Mutation(() => String)
removeBook(@Args('bookId', { type: () => Int }) id: number): string {
  const bookToDelete = this.booksService.findByBookId(id);
  if (!bookToDelete) {
    throw new Error('Book not found');
  }
  this.booksService.deleteBook(id);
  return `Book with ID ${id} has been successfully deleted.`;
}
}
