import { Test, TestingModule } from '@nestjs/testing'

import { ReportService } from '../services/reportService'

import { ReportController } from './reportController'

describe('ReportController', () => {
  let reportController: ReportController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReportController],
      providers: [ReportService],
    }).compile()

    reportController = app.get<ReportController>(ReportController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reportController.getHello()).toBe('Hello World!')
    })
  })
})
