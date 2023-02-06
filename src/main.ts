import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModules } from './app.module'

async function closedApiServer() {
  const server = await NestFactory.create(AppModules)
  server.useGlobalPipes(new ValidationPipe())
  await server.listen(process.env.CLOSED_API_SERVER_PORT)
  console.log(`Listen on https://localhost:${process.env.CLOSED_API_SERVER_PORT} ...`)
}

closedApiServer()
