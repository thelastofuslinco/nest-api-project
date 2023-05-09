import {
  Controller,
  Put,
  Post,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: id });
  }

  @Post('user')
  async signupUser(
    @Body()
    userData: {
      name: string;
      email: string;
      phone: string;
      gender: string;
      age: number;
      password: string;
      professional: boolean;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('user/:id')
  async updateTask(
    @Param('id') id: string,
    @Body()
    userData: {
      name: string;
      email: string;
      phone: string;
      gender: string;
      age: number;
      password: string;
      professional: boolean;
    },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id },
      data: { ...userData },
    });
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: id });
  }
}
