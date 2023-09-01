// src/todos/dto/update-todo.dto.ts

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTodoDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional() // Title is optional for updates
  title: string;

  @IsString()
  @IsOptional() // Description is optional for updates
  description: string;
}
