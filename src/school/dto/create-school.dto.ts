import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Name of school' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Address of school' })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'History of school' })
  history: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Achivement of school' })
  achivement: [
    {
      id: number;
      name: string;
      rank: string;
      year: number;
      description: string;
      image: string;
    },
  ];

  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Academic programs of school' })
  academicPrograms: [
    {
      id: number;
      name: string;
      description: string;
    },
  ];
}
