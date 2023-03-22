import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { TestController } from './test.controller'

@Module({ imports: [HttpModule], controllers: [TestController] })
export class TestModules {}
