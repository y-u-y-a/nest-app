import { HttpStatus } from '@nestjs/common'

export class NotFoundError {
  constructor(public message = 'Not found.', public statusCode = HttpStatus.NOT_FOUND) {}
}
