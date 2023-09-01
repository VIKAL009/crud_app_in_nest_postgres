// src/todo/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { username } });
  }
  async findUser(id: number): Promise<User | undefined> {
    return this.userModel.findOne({ where: { id } });
  }
  async getAllUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(user.password);
    return this.userModel.create({username :user.username , password : hashedPassword});
  }
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the number of salt rounds as needed
    return bcrypt.hash(password, saltRounds);
  }

}
