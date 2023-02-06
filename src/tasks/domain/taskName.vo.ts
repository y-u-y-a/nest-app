import { ExceptionError } from '@/utils/exceptionError'
import { NotFoundError } from '@/utils/notFoundError'

export class TaskName {
  private _value: string

  get value(): string {
    return this._value
  }

  // validation
  constructor(value: string) {
    if (!value || value.length === 0) {
      throw new NotFoundError()
    }

    if (value.length > 20) {
      throw new ExceptionError('Task name should not be longer than 20 characters.')
    }

    this._value = value
  }
}
