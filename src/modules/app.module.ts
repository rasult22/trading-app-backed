import { Module } from '@nestjs/common';
import { AppController } from '@src/controllers/app/app.controller';
import { AppService } from '@src/services/app/app.service';
import { UserModule } from './user.module';
import { MongoDbModule } from '@src/modules/mongo-db.module';

@Module({
  imports: [UserModule, MongoDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
