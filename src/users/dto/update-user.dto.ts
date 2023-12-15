import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Length(7, 8, { message: "StudentId's length must be 7" })
  studentId: string;
}
