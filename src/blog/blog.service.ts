import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { CreateBlogDto } from './create-blog.dto';
import { UpdateBlogDto } from './update-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(id: string): Promise<any> {
    return this.blogModel.findById(id).exec();
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<any> {
    return this.blogModel.findByIdAndUpdate(id, updateBlogDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.blogModel.deleteOne({ _id: id }).exec();
  }
}