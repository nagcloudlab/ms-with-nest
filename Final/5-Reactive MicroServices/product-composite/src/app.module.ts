import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: "KAFKA",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "pc-client",
            brokers: ["kafka:9092"]
          },
          consumer: {
            groupId: "pc-consumer-group"
          }
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
