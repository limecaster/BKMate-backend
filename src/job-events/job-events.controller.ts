import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { JobEventsService } from './job-events.service';
import { CreateJobEventDto } from './dto/create-job-event.dto';
import { UpdateJobEventDto } from './dto/update-job-event.dto';

@Controller('job-events')
export class JobEventsController {
  constructor(private readonly jobEventsService: JobEventsService) {}

  @Post()
  create(@Body() createJobEventDto: CreateJobEventDto) {
    return this.jobEventsService.create(createJobEventDto);
  }

  @Get()
  findAll() {
    return this.jobEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobEventsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobEventDto: UpdateJobEventDto,
  ) {
    return this.jobEventsService.update(+id, updateJobEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobEventsService.remove(+id);
  }
}
