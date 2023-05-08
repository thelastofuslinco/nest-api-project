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
import { Task as TaskModel, Prisma } from '@prisma/client';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('task')
  async getTasks(@Query('status') status: string): Promise<TaskModel[]> {
    return this.taskService.tasks({
      where: { status },
    });
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
      owner_id: Prisma.UserCreateNestedOneWithoutTasksInput;
    },
  ): Promise<TaskModel> {
    const { description, owner_id } = postData;
    return this.taskService.createTask({
      description,
      status: 'Requested',
      owner: owner_id,
    });
  }

  @Put('task/:id')
  async updateTask(
    @Param('id') id: string,
    @Query('status') status: string,
  ): Promise<TaskModel> {
    return this.taskService.updateTask({
      where: { id },
      data: { status },
    });
  }

  @Delete('task/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id: id });
  }
}
