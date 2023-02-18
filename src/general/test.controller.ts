import { Controller, Get } from '@nestjs/common'

@Controller('test')
export class TestController {
  @Get()
  test(): string {
    return 'Success test!'
  }
}
