import { BadRequestException, Controller, Get, HttpException, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductAggregate } from './dto/product-aggregate.dto';
import { zip, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Controller("api/product-composite")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(":id")
  getHello(@Param("id") productId: number): ProductAggregate {
    const stream1 = this.appService.getProduct(productId);
    const stream2 = this.appService.getReviews(productId);
    return zip(stream1, stream2)
      .pipe(map(responses => [responses[0].data, responses[1].data]))
      .pipe(map(dataElements => ({ ...dataElements[0], reviews: dataElements[1] })))
      .pipe(catchError(error => {
        console.dir(error)
        if (error?.response?.data?.statusCode == 400)
          return throwError(() => new BadRequestException())
        if (error?.response?.data?.statusCode === 404)
          return throwError(() => new NotFoundException())
        return throwError(() => new HttpException("internal error", 500))
      }))
  }
}
