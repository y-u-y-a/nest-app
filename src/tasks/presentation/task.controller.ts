import { Controller, Get } from '@nestjs/common'

import { TaskRepository } from '../repository/task.repository'

import { FindAllTasksResponseDto } from './task.dto'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskRepository: TaskRepository) {}

  @Get()
  async findAll(): Promise<FindAllTasksResponseDto> {
    const tasks = this.taskRepository.findAll()

    return new FindAllTasksResponseDto(tasks)
  }
}
