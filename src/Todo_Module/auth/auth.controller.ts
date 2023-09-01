// src/todo/auth.controller.ts

import { Controller, Request, Post, UseGuards ,Response,Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
const jwt = require('jsonwebtoken');


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    const authorizationHeader : string = req.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = jwt.decode(token);
    console.log(token,decodedToken);
    // console.log(req.user);
    return this.authService.login(req.body);
    // console.log(req);
  }
}
