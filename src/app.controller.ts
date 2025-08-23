import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id:string): Book | undefined{
    const bookID = id
    return this.booksService.findById(bookID)
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book|undefined {
    const bookData = book;

    if(!bookData.title || !bookData.author || !bookData.publishedYear) 
      return undefined;
    return this.booksService.create(bookData);
  }
}
