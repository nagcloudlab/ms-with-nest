import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './dto/product.dto';

@Injectable()
export class AppService {

  public getProduct(id: number) {
    if (id < 1) {
      throw new BadRequestException("invalid product id")
    }
    if (id == 13) {
      throw new NotFoundException("product not found")
    }
    return new Product(id, `product-${id}`, 123)
  }


}
