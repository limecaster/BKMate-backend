import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString({ message: 'Name must be string' })
  @ApiProperty({
    type: String,
    example: 'Đỗ Văn Bâng',
    description: 'Name of user',
  })
  name: string;

  @Length(7, 8, { message: "StudentId's length must be 7" })
  @ApiProperty({
    type: String,
    example: '2110813',
    description: 'StudentId of user',
  })
  studentId: string;

  @IsString({ message: 'Class must be string' })
  @ApiProperty({
    type: String,
    example: 'MT21KH08',
    description: 'Class of user',
  })
  class: string;

  @IsString({ message: 'Major must be string' })
  @ApiProperty({
    type: String,
    example: 'Khoa học máy tính',
    description: 'Major of user',
  })
  major: string;

  @IsString({ message: 'Phone number must be string' })
  @ApiProperty({
    type: String,
    example: '0123456789',
    description: 'Phone number of user',
  })
  phoneNumber: string;
}
