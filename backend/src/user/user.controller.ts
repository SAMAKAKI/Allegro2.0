import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAllUser(): Promise<User[]>{
    return this.userService.getAllUser()
  } 

  @Post('create')
  async addUser(@Body() data: User): Promise<User>{
    return this.userService.addUser(data)
  }
}
