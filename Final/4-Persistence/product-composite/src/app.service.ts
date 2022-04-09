import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {


  constructor(private httpService: HttpService) { }

  getProduct(productId: number): Observable<any> {
    return this.httpService
      .get(`http://product:7001/api/product/${productId}`)
  }

  getReviews(productId: number): Observable<any> {
    return this.httpService
      .get(`http://review:7002/api/review?productId=${productId}`)
  }

  createProduct(product: any): Observable<any> {
    return this.httpService
      .post(`http://product:7001/api/product`, product)
  }
  createReview(productId, reviews): Observable<any> {
    return this.httpService
      .post(`http://review:7002/api/review?productId=${productId}`, reviews)

  }

}
