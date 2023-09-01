// src/todo/todo.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import sequelizeConfig from '../../sequelize.config';

@Module({
  imports: [SequelizeModule.forFeature([Todo]), SequelizeModule.forRoot(sequelizeConfig)],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
