import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ChromeModule } from "./chrome/chrome.module"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env"] }), UsersModule, ChromeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
