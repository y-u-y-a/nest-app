import { IsNotEmpty, IsString, MaxLength } from "class-validator"

/**
 * データの内容や型が変更された場合でも、修正箇所をDTO内に閉じ込めることができる
 * やりとりするデータをDTOの型に制限することで誤ったデータを扱うリスクを軽減できる
 * NestJSのバリデーション機能を使用できる
 */
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string

  @IsString()
  @IsNotEmpty()
  email: string
}
