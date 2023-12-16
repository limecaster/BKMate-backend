import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJobEventDto {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsString({ message: 'Description must be string' })
  @IsNotEmpty({ message: 'Description must not be empty' })
  description: string;

  @IsString({ message: 'Start must be string' }) // Change IsDate to IsString
  @IsNotEmpty({ message: 'Start must not be empty' })
  start: string; // Change Date to string

  @IsString({ message: 'End must be string' }) // Change IsDate to IsString
  @IsNotEmpty({ message: 'End must not be empty' })
  end: string; // Change Date to string

  @IsString({ message: 'Location must be string' })
  @IsNotEmpty({ message: 'Location must not be empty' })
  location: string;

  @IsString({ message: 'Company must be string' })
  @IsNotEmpty({ message: 'Company must not be empty' })
  company: string;

  @IsString({ message: 'Contact must be string' })
  @IsNotEmpty({ message: 'Contact must not be empty' })
  contact: string;

  @IsString({ message: 'Link must be string' })
  @IsNotEmpty({ message: 'Link must not be empty' })
  link: string;

  @IsString({ message: 'Image must be string' })
  @IsNotEmpty({ message: 'Image must not be empty' })
  image: string;

  @IsString({ message: 'Status must be string' })
  @IsNotEmpty({ message: 'Status must not be empty' })
  status: string;

  @IsString({ message: 'CreatedBy must be string' })
  @IsNotEmpty({ message: 'CreatedBy must not be empty' })
  createdBy: string;
}
