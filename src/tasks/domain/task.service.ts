import { Injectable } from '@nestjs/common'

import { Task } from './task.entity'

@Injectable()
export class TaskService {
  //   constructor(private readonly taskRepository: ITaskRepository) {}

  async exists(task: Task): Promise<boolean> {
    console.log(task)
    return true
    // const foundedTask = await this.taskRepository.findOneByName(task.name);
    // return !!foundedTask;
  }
}
