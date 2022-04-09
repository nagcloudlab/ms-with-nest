import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './dto/product.dto';
import { ProductEntity } from './entity/product.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>
  ) { }

  public getProduct(id: number) {
    if (id < 1) {
      throw new BadRequestException("invalid product id")
    }
    if (id == 13) {
      throw new NotFoundException("product not found")
    }
    // return new Product(id, `product-${id}`, 123)
    return this.productRepo.findOne(id)
  }

  public createProduct(product: Product) {
    const productEntity = this.productRepo.create(product);
    return this.productRepo.save(productEntity)
  }

  public deleteProduct(productId: number) {
    return this.productRepo.delete(productId)
  }


}
