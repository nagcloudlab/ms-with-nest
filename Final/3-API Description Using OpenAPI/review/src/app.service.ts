import { BadRequestException, Injectable } from '@nestjs/common';
import { Review } from './dto/review.dto';

@Injectable()
export class AppService {

  getReviews(productId: number): Array<Review> {
    if (productId < 1) {
      throw new BadRequestException("Invalid productId: " + productId);
    }
    if (productId == 213) {
      return [];
    }
    const reviews = [
      new Review(productId, 1, "Author 1", "Subject 1", "Content 1"),
      new Review(productId, 2, "Author 2", "Subject 2", "Content 2"),
      new Review(productId, 3, "Author 3", "Subject 3", "Content 3")
    ]
    return reviews;
  }

}
