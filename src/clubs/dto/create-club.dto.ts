import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Big data club',
    description: 'Name of club',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Big data club là câu lạc bộ về big data',
    description: 'Description of club',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'image-link.com',
    description: 'Image link of club',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'facebook.com/bigdataclub',
    description: 'Contact of club',
  })
  contact: string;
}
