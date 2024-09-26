import { Controller, Get } from "@nestjs/common"
import { chromium } from "playwright-core"

@Controller("chrome")
export class ChromeController {
  @Get()
  async start(): Promise<boolean> {
    const browser = await chromium.launch({
      channel: "chrome",
      headless: false,
    })

    const page = await browser.newPage()
    await page.goto("https://tokyo-calendar-date.jp/apple_login")
    // await page.fill("#input", "sample text")
    // await page.click('.button');
    // await browser.close()
    return true
  }
}
