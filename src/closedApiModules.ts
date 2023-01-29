import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ReportController } from './controllers/reportController'
import { ReportService } from './services/reportService'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] })],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ClosedApiModules {}
