import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function closedApiServer() {
  const server = await NestFactory.create(AppModule)
  await server.listen(process.env.CLOSED_API_SERVER_PORT)
  console.log(`start server on https://localhost:${process.env.CLOSED_API_SERVER_PORT} ...`)
}

closedApiServer()
