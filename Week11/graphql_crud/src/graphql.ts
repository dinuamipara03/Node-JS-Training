
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    book(bookId: number): Book | Promise<Book>;
}

export interface IMutation {
    createBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
    updateBook(bookId: number, updateBookArgs: AddBookArgs): Book | Promise<Book>;
    removeBook(bookId: number): string | Promise<string>;
}

type Nullable<T> = T | null;
