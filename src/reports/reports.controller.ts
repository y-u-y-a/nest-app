import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common'

import { CreateReportDto } from './dto/createReport.dto'
import { Report } from './report.model'
import { ReportService } from './reports.service'

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  findAll(): Report[] {
    return this.reportService.findAll()
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Report {
    return this.reportService.findById(id)
  }

  @Post()
  create(@Body() createReportDto: CreateReportDto): boolean {
    return this.reportService.create(createReportDto)
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): boolean {
    return this.reportService.delete(id)
  }
}
