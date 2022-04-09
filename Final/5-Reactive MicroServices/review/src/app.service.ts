import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './dto/review.dto';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<Review>,
  ) { }

  public getReviews(productId: number) {
    if (productId < 1) {
      throw new BadRequestException("Invalid productId: " + productId);
    }
    if (productId == 213) {
      return [];
    }
    // const reviews = [
    //   new Review(productId, 1, "Author 1", "Subject 1", "Content 1"),
    //   new Review(productId, 2, "Author 2", "Subject 2", "Content 2"),
    //   new Review(productId, 3, "Author 3", "Subject 3", "Content 3")
    // ]
    // return reviews;
    return this.reviewModel.find({ productId })
  }

  public async createReview(review: Review): Promise<Review> {
    const reviewModel = new this.reviewModel(review);
    return await reviewModel.save();
  }

  public async deleteReview(reviewId: number): Promise<Review> {
    return await this.reviewModel.findOneAndRemove({ reviewId });
  }




}
