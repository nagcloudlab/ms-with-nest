import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductEntity } from './entity/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'user',
      password: 'pwd',
      database: 'productdb',
      entities: [ProductEntity],
      synchronize: true
    }),
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
