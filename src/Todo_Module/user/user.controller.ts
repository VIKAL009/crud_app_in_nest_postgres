// src/todo/user/user.controller.ts

import { Controller, Post, Body, ValidationPipe, Get, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get("find/:id")
  async findOne(@Param("id") id: number) :Promise<User>{
        const User = await this.userService.findUser(id);
        if(!User){
          throw new NotFoundException('To-do item not found');
        }
        return User;
  }

  @Get("list")
  async findAll() {
    // return await this.todoService.getAllTodos();
    const users =  await this.userService.getAllUsers();
    // console.log(users);
    return users; 
  }
  
}
