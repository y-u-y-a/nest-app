import { HttpStatus } from '@nestjs/common'

export class ExceptionError {
  constructor(public message: string, public statusCode = HttpStatus.INTERNAL_SERVER_ERROR) {}
}
