import { Module } from "@nestjs/common"
import { ChromeController } from "./chrome.controller"

@Module({
  imports: [],
  controllers: [ChromeController],
  providers: [],
})
export class ChromeModule {}
