import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/review")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  get(@Query("productId") productId: number) {
    return this.appService.getReviews(productId);
  }

  @Post()
  post(@Query("productId") productId: number, @Body() body) {
    body.productId = productId;
    return this.appService.createReview(body)
  }

  @Delete()
  delete(@Query("productId") productId: number) {
    return this.appService.deleteReview(productId)
  }

}
