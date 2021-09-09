import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule,
  MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/hostal', {
    autoCreate: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
