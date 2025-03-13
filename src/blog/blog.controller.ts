// src/blog/blog.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './create-blog.dto';
import { UpdateBlogDto } from './update-blog.dto';
import { Blog } from './blog.schema';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.blogService.remove(id);
  }
}