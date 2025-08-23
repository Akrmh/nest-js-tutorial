import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookID: string): Book | undefined {
    return books.find((book) => book.id === bookID);
  }

  create(book: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newId,
      title: book.title ??'',
      author: book.author ?? '',
      publishedYear: book.publishedYear ?? 0,
    };
    books.push(newBook);

    return newBook;
  }
}