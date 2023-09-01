// src/todo/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    // console.log(password,user.password);
    const x = bcrypt.compareSync(password, user.password);
    // console.log(x);
    if (user && x) {
      const { password, ...result } = user;
      // console.log("yes");
      return result;
    }
    return null;
  }

  async login(dto: CreateUserDto): Promise<any> {
    const payload = { username: dto.username, password: dto.password };
    // console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
