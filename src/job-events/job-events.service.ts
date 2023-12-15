import { Injectable } from '@nestjs/common';
import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';

@Injectable()
export class JobEventsService {
  create(createJobEventDto: CreateJobEventDto) {
    return 'This action adds a new jobEvent';
  }

  findAll() {
    return `This action returns all jobEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobEvent`;
  }

  update(id: number, updateJobEventDto: UpdateJobEventDto) {
    return `This action updates a #${id} jobEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobEvent`;
  }
}
