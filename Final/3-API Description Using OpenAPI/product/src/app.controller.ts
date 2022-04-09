import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './dto/product.dto';

@Controller("api/product")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(":id")
  gets(@Param("id", ParseIntPipe) id: number): Product {
    return this.appService.getProduct(id)
  }

}
