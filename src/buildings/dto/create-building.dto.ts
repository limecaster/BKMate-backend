import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBuildingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}
