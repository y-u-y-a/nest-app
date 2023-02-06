import { v4 as uuid } from 'uuid'

import { TaskName } from './taskName.vo'

export class Task {
  private _id: string
  private _name: TaskName
  private _status: boolean

  get id(): string {
    return this._id
  }

  get name(): TaskName {
    return this._name
  }

  get status(): boolean {
    return this._status
  }

  constructor(name: TaskName, status = false) {
    this._id = uuid()
    this._name = name
    this._status = status
  }

  updateName(name: TaskName): void {
    this._name = name
  }

  updateStatus(status: boolean): void {
    this._status = status
  }
}
