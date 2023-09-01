// src/todos/dto/create-todo.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateToDoDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsOptional()
    readonly description: string;
  }
  