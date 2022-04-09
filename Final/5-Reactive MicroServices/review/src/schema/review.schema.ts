import * as mongoose from 'mongoose';


export interface IReviewSchema extends mongoose.Document {
    productId: number;
    reviewId: number;
    author: string;
    subject: string;
    content: string
}

export const ReviewSchema = new mongoose.Schema<IReviewSchema>({
    productId: {
        type: Number,
    },
    reviewId: {
        type: Number,
    },
    author: {
        type: String,
    },
    subject: {
        type: String,
    },
    content: {
        type: String,
    },
})