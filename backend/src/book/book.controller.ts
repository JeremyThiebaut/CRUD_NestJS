import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Request, Response } from 'express';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(@Req() request: Request, @Res() response: Response) {
    const result = await this.bookService.getAllBook();
    console.log(result);
    return response.status(200).json({
      statusCode: 200,
      message: 'All books fetched successfully',
      result: result,
    });
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() data: Book): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() data: Book): Promise<Book> {
    return this.bookService.updateBook(id, data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
}
