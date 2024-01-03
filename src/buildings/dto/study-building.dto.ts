import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { ClassroomDto } from './classroom.dto';

export class StudyBuildingDto {
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
    example: 'image-link.com',
    description: 'Image link of building',
  })
  image: string;

  @ApiProperty({
    type: Array,
    example:
      '[{name: "Phong hoc", title: "Phong hoc", type: "Theory", description: "Phong hoc nay co 100 cho ngoi", image: "image-link.com", location: "Đông Hòa, Dĩ An, Bình Dương"}]',
    description: 'Classrooms of building',
  })
  classRoom: ClassroomDto[];
}
