import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Review } from './dto/review.dto';

@Controller("api/review")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  get(@Query("productId") productId: number): Array<Review> {
    return this.appService.getReviews(productId);
  }

}
