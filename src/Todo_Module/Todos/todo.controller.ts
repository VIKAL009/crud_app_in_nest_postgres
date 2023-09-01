// src/todo/todo.controller.ts

import { Controller, Post, Get, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateToDoDTO } from '../dto/create-todo.dto';
import { UpdateTodoDTO } from '../dto/update-todo.dto';
import { Todo } from '../models/todo.model';


@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post("add")
  async create(@Body() data: CreateToDoDTO) {
    return this.todoService.createTodo(data);
  }

  @Get("list")
  async findAll() {
    // return await this.todoService.getAllTodos();
    const todos =  await this.todoService.getAllTodos();
    return todos; 
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() updateTodoDTO: UpdateTodoDTO): Promise<Todo> {
    // Validate that the to-do item exists
    const existingTodo = await this.todoService.getTodoById(id);
    if (!existingTodo) {
      throw new NotFoundException('To-do item not found');
    }

    // Update the to-do item with the provided data
    const updatedTodo = await this.todoService.updateTodo(id, updateTodoDTO);

    return updatedTodo;
  }


  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    // Validate that the to-do item exists
    const existingTodo = await this.todoService.getTodoById(id);
    if (!existingTodo) {
      throw new NotFoundException('To-do item not found');
    }

    // Delete the to-do item
    return await this.todoService.deleteTodo(id);
  }

  @Get("find/:id")
  async findOne(@Param("id") id: number) :Promise<Todo>{
        const todo = await this.todoService.getTodoById(id);
        if(!todo){
          throw new NotFoundException('To-do item not found');
        }
        return todo;
  }
}
