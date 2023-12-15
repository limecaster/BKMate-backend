import { IsString, IsNotEmpty } from 'class-validator';
export class CreateClubDto {
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
  contact: string;
}
