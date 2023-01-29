import { Controller, Get } from '@nestjs/common'

import { ReportService } from '../services/reportService'

@Controller()
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getHello(): string {
    return this.reportService.getHello()
  }
}
