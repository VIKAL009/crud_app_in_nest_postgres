// src/todo/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants/constants';
import { JwtStrategy } from '../strategy/jwt.strategy';
// import { UserRepository } from '../user/user.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule
    .register({ defaultStrategy: 'jwt' })
    ,
    JwtModule
    .register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }, // Adjust token expiration as needed
    })
    ,
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,LocalStrategy],
  exports: [JwtStrategy,PassportModule,AuthService],
})
export class AuthModule {}
