import { NestFactory } from '@nestjs/core'

import { ClosedApiModules } from './closedApiModules'

async function closedApiServer() {
  const server = await NestFactory.create(ClosedApiModules)
  await server.listen(process.env.CLOSED_API_SERVER_PORT)
  console.log(`Listen on https://localhost:${process.env.CLOSED_API_SERVER_PORT} ...`)
}

closedApiServer()
