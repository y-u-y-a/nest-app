import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ReportsModules } from './reports/reports.module'
import { TestModules } from './test/test.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }), TestModules, ReportsModules],
})
export class AppModules {}
