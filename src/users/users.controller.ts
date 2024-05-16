import { Controller, Get } from "@nestjs/common"
import type { User } from "./domain/user.model"
import type { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll()
  }

  // @Get(':id')
  // findById(@Param('id', ParseUUIDPipe) id: string): User {
  //   return this.usersService.findById(id)
  // }

  // @Post()
  // create(@Body() createReportDto: CreateReportDto): boolean {
  //   return this.reportService.create(createReportDto)
  // }

  // @Delete(':id')
  // delete(@Param('id', ParseUUIDPipe) id: string): boolean {
  //   return this.reportService.delete(id)
  // }
}
