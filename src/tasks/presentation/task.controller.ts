import { Controller, Get } from '@nestjs/common'

import { TaskService } from '../task.service'

import { FindAllTasksResponseDto } from './task.dto'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<FindAllTasksResponseDto> {
    const tasks = this.taskService.findAll()

    return new FindAllTasksResponseDto(tasks)
  }
}
