import { HttpStatus } from '@nestjs/common'

import { Task } from '../domain/task.entity'

export class FindAllTasksResponseDto {
  statusCode = HttpStatus.OK
  tasks: { id: string; name: string; status: boolean }[]

  constructor(_tasks: Task[]) {
    this.tasks = _tasks.map(task => {
      return { id: task.id, name: task.name.value, status: task.status }
    })
  }
}

export interface CreateTaskRequestDto {
  name: string
}
