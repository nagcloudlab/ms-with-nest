import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoConfigService } from './config/mongo-config.service';
import { ReviewSchema } from './schema/review.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService
    }),
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewSchema,
        collection: 'reviews'
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
