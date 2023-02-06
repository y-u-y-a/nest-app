import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'

import { CreateReportDto } from './dto/createReport.dto'
import { Report } from './report.model'

@Injectable()
export class ReportService {
  private reports: Report[] = []

  findAll(): Report[] {
    return this.reports
  }

  findById(id: string): Report {
    const report = this.reports.find(report => report.id === id)
    if (!report) {
      throw new NotFoundException()
    }
    return report
  }

  create(createReportDto: CreateReportDto): boolean {
    const now = new Date()
    this.reports.push({
      id: uuid(),
      createdAt: now,
      updatedAt: now,
      ...createReportDto,
    })
    return true
  }

  delete(id: string): boolean {
    this.reports = this.reports.filter(report => report.id !== id)
    return true
  }
}
