import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://rasult22:H-L7ByJ-JBtRyGk@cluster0.mmhuump.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class MongoDbModule {}
