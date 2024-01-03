import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ClassroomDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Phong hoc',
    description: 'Name of building',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Phong hoc',
    description: 'Name of building',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Theory, Practice, Lab, ...',
    description: 'Name of building',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Phong hoc nay co 100 cho ngoi',
    description: 'Name of building',
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
    example: '10.8705',
    description: 'Latitude of building',
  })
  latitude: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: '106.8034',
    description: 'Longitude of building',
  })
  longitude: string;
}
