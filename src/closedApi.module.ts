import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ReportsModules } from './reports/reports.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }), ReportsModules],
})
export class ClosedApiModules {}
