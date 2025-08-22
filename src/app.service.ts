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
}