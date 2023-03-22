import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModules } from './app.module'
import { DEV_ENV } from './const'

async function closedApiServer() {
  const server = await NestFactory.create(AppModules)
  server.useGlobalPipes(new ValidationPipe())
  await server.listen(process.env.CLOSED_API_SERVER_PORT)

  switch (process.env.DEV_ENV) {
    case DEV_ENV.LOCAL:
      return console.log(`Connected！\n Call to http://localhost:${process.env.CLOSED_API_SERVER_PORT}/test`)
    case DEV_ENV.DEVELOP:
      return console.log(`Connected！\n Call to https://localhost:${process.env.CLOSED_API_SERVER_PORT}/test`)
    default:
      throw new Error('サーバー起動に失敗しました')
  }
}

closedApiServer()
