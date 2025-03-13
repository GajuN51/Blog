// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://chris:chris@cluster0.k1npp.mongodb.net/blog-1?'), 
    BlogModule,
  ],
})
export class AppModule {}