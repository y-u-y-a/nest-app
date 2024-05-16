import { Injectable } from "@nestjs/common"
import type { User } from "./domain/user.model"

@Injectable()
export class UsersService {
  // private users: User[] = []

  findAll(): User[] {
    return []
  }

  // findById(id: string): User {
  //   const user = this.users.find((user) => user.id === id)
  //   if (!user) {
  //     throw new NotFoundException()
  //   }
  //   return user
  // }

  // create(createReportDto: CreateReportDto): boolean {
  //   const now = new Date()
  //   this.users.push({
  //     id: uuid(),
  //     createdAt: now,
  //     updatedAt: now,
  //     ...createReportDto,
  //   })
  //   return true
  // }

  // delete(id: string): boolean {
  //   this.users = this.users.filter((report) => report.id !== id)
  //   return true
  // }
}
