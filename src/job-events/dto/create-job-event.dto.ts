import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJobEventDto {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title must not be empty' })
  @ApiProperty({
    type: String,
    example: 'Job fair 2023',
    description: 'Title of job event',
  })
  title: string;

  @IsString({ message: 'Description must be string' })
  @IsNotEmpty({ message: 'Description must not be empty' })
  @ApiProperty({
    type: String,
    example: 'Job fair là hoạt động thường niên',
    description: 'Description of job event',
  })
  description: string;

  @IsString({ message: 'Start must be string' }) // Change IsDate to IsString
  @IsNotEmpty({ message: 'Start must not be empty' })
  @ApiProperty({
    type: String,
    example: '20-03-2024',
    description: 'Start of job event',
  })
  start: string; // Change Date to string

  @IsString({ message: 'End must be string' }) // Change IsDate to IsString
  @IsNotEmpty({ message: 'End must not be empty' })
  @ApiProperty({
    type: String,
    example: '20-03-2024',
    description: 'End of job event',
  })
  end: string; // Change Date to string

  @IsString({ message: 'Location must be string' })
  @IsNotEmpty({ message: 'Location must not be empty' })
  @ApiProperty({
    type: String,
    example: 'BK-B6 Đông Hòa Dĩ An Bình Dương',
    description: 'Location of job event',
  })
  location: string;

  @IsString({ message: 'Company must be string' })
  @IsNotEmpty({ message: 'Company must not be empty' })
  @ApiProperty({
    type: String,
    example: 'KMS',
    description: 'Company of job event',
  })
  company: string;

  @IsString({ message: 'Contact must be string' })
  @IsNotEmpty({ message: 'Contact must not be empty' })
  @ApiProperty({
    type: String,
    example: 'facebook.com/bantruyenthong',
    description: 'Contact of job event',
  })
  contact: string;

  @IsString({ message: 'Link must be string' })
  @IsNotEmpty({ message: 'Link must not be empty' })
  @ApiProperty({
    type: String,
    example: 'linkdangky.com',
    description: 'Link of job event',
  })
  link: string;

  @IsString({ message: 'Image must be string' })
  @IsNotEmpty({ message: 'Image must not be empty' })
  @ApiProperty({
    type: String,
    example: 'linkimage.com',
    description: 'Image of job event',
  })
  image: string;

  @IsString({ message: 'Status must be string' })
  @IsNotEmpty({ message: 'Status must not be empty' })
  @ApiProperty({
    type: String,
    example: 'Đang diễn ra',
    description: 'Status of job event',
  })
  status: string;

  @IsString({ message: 'CreatedBy must be string' })
  @IsNotEmpty({ message: 'CreatedBy must not be empty' })
  @ApiProperty({
    type: String,
    example: 'admin',
    description: 'CreatedBy of job event',
  })
  createdBy: string;
}
