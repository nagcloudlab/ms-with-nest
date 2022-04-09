import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {



  constructor(
    private httpService: HttpService,
    @Inject("KAFKA") private readonly clientKafka: ClientKafka
  ) { }

  getProduct(productId: number): Observable<any> {
    return this.httpService
      .get(`http://product:7001/api/product/${productId}`)
  }

  getReviews(productId: number): Observable<any> {
    return this.httpService
      .get(`http://review:7002/api/review?productId=${productId}`)
  }

  createProduct(product: any): Observable<any> {
    return this.clientKafka.emit('product', product)
  }
  createReview(productId, reviews): Observable<any> {
    return this.httpService
      .post(`http://review:7002/api/review?productId=${productId}`, reviews)

  }

}
