import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class FunctionalBuildingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Căn tin',
    description: 'Name of functional building',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Đây là căn tin',
    description: 'Description of functional building',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Đây là căn tin',
    description: 'Description of functional building',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'https://www.uit.edu.vn/sites/vi/files/banner_0.jpg',
    description: 'Description of functional building',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Đông Hòa, Dĩ An, Bình Dương',
    description: 'Location of functional building',
  })
  location: string;
}
