import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {


  constructor(private httpService: HttpService) { }

  getProduct(productId: number): Observable<any> {
    return this.httpService
      .get(`http://localhost:7001/api/product/${productId}`)
  }

  getReviews(productId: number): Observable<any> {
    return this.httpService
      .get(`http://localhost:7002/api/review?productId=${productId}`)
  }

}
