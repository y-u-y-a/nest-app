import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app.module"

async function apiServer() {
  try {
    const SERVER_POST = 8000
    const server = await NestFactory.create(AppModule)
    // server.useGlobalPipes(new ValidationPipe())
    await server.listen(SERVER_POST)
    // console.info(`Success to http://localhost:${SERVER_POST}/test ...`)
  } catch (error) {
    console.error("サーバー起動に失敗しました", error)
    throw new Error("サーバー起動に失敗しました")
  }
}

apiServer()
