import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function closedApiServer() {
  const server = await NestFactory.create(AppModule)
  await server.listen(8000)
}

closedApiServer()
