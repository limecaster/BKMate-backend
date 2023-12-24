import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBuildingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'BK-B6',
    description: 'Name of building',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Đây là tòa H6 cũ',
    description: 'Description of building',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'image-link.com',
    description: 'Image link of building',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Đông Hòa, Dĩ An, Bình Dương',
    description: 'Location of building',
  })
  location: string;
}
