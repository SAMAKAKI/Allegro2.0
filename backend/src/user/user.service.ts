import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/$prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async getAllUser(): Promise<User[]>{
    return this.prisma.user.findMany()
  }

  async addUser(data: User): Promise<User>{
    return this.prisma.user.create({data})
  }
}
