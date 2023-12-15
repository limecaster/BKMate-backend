import { PartialType } from '@nestjs/mapped-types';
import { CreateJobEventDto } from './create-job-event.dto';

export class UpdateJobEventDto extends PartialType(CreateJobEventDto) {}
