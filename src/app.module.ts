import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmiseController } from './controllers/omise.controller';
import { OmiseService } from './services/omise.service';
import { UserCardInfo, UserCardInfoSchema } from './models/user-card.schema';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: UserCardInfo.name, schema: UserCardInfoSchema },
    ]),
  ],
  controllers: [AppController, OmiseController],
  providers: [AppService, OmiseService],
})
export class AppModule {}
