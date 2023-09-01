// src/app.module.ts

import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './sequelize.config';
import { TodoModule } from './Todo_Module/Todos/todo.module';
import { AuthModule } from './Todo_Module/auth/auth.module';
import { UserModule } from './Todo_Module/user/user.module';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), TodoModule, AuthModule , UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
