import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller("api/product")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(":id")
  async get(@Param("id", ParseIntPipe) id: number) {
    const product = await this.appService.getProduct(id)
    if (product) return product;
    else throw new NotFoundException("not found")
  }

  @Post()
  post(@Body() body) {
    return this.appService.createProduct(body)
  }


  @EventPattern("product")
  handleEvent(@Payload() data: any) {
    console.log(data.value)
    return this.appService.createProduct(data.value)
  }


  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.appService.deleteProduct(id)
  }

}
