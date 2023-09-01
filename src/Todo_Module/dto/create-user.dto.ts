// user/dto/create-user.dto.ts

import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1) // Adjust the minimum password length as needed
  password: string;
}
