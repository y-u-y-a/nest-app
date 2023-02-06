import { Injectable } from '@nestjs/common'

import { Task } from '../domain/task.entity'

@Injectable()
export class TaskRepository {
  private tasks: Task[] = []

  findAll(): Task[] {
    return this.tasks
  }
}
