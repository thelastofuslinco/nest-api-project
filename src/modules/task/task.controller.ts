import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { Task as TaskModel } from '@prisma/client';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('task')
  async getTasks(@Query('user_id') user_id: string): Promise<TaskModel[]> {
    if (user_id) {
      return this.taskService.tasks({
        where: { user_id },
      });
    }

    return [];
  }

  @Get('task/:id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.task({ id: id });
  }

  @Post('task')
  async requestTask(
    @Body()
    postData: {
      description: string;
      userId: string;
    },
  ): Promise<TaskModel> {
    const { description, userId } = postData;
    return this.taskService.createTask({
      description,
      status: 'Requested',
      owner: { connect: { id: userId } },
    });
  }

  @Put('task/:id')
  async updateTask(
    @Param('id') id: string,
    @Body()
    data: {
      status: string;
      description: string;
    },
  ): Promise<TaskModel> {
    return this.taskService.updateTask({
      where: { id },
      data: { ...data },
    });
  }

  @Delete('task/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id: id });
  }
}
