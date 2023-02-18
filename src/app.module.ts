import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { TestModules } from './general/test.module'
import { ReportsModules } from './reports/reports.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }), TestModules, ReportsModules],
})
export class AppModules {}
