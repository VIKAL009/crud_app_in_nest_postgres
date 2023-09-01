// src/todo/todo.service.ts
import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from '../models/todo.model';
import { CreateToDoDTO } from '../dto/create-todo.dto'
import { UpdateTodoDTO } from '../dto/update-todo.dto';


@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) {}

  async createTodo(data: CreateToDoDTO): Promise<Todo> {
    return this.todoModel.create({title : data.title, description : data.description});
  }

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoModel.findAll();
  }

  async updateTodo(id: number, updateTodoDTO: UpdateTodoDTO): Promise<Todo> {
    // Find the to-do item by id
    const todo = await this.todoModel.findByPk(id);

    if (!todo) {
      throw new NotFoundException('To-do item not found');
    }

    // Update the to-do item with the provided data
    if (updateTodoDTO.title) {
      todo.title = updateTodoDTO.title;
    }
    if (updateTodoDTO.description) {
      todo.description = updateTodoDTO.description;
    }

    // Save the updated to-do item
    await todo.save();

    return todo;
  }

  async deleteTodo(id: number): Promise<void> {
    // Find the to-do item by id and delete it
    const todo = await this.todoModel.findByPk(id);

    if (!todo) {
      throw new NotFoundException('To-do item not found');
    }

    return await todo.destroy();
  }

  async getTodoById(id: number): Promise<Todo | null> {
    // Find and return the to-do item by id
    return this.todoModel.findByPk(id);
  }

}
