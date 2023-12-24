import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'example@gmail.com',
    description: 'Email of user',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    type: String,
    example: '123456',
    description: 'Password of user',
  })
  password: string;
}
