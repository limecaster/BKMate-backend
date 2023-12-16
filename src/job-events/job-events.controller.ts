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
import { ApiResponse } from '@nestjs/swagger';

@Controller('job-events')
export class JobEventsController {
  constructor(private readonly jobEventsService: JobEventsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create job event successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createJobEventDto: CreateJobEventDto) {
    return this.jobEventsService.create(createJobEventDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all job events successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.jobEventsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get job event successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  findOne(@Param('id') id: string) {
    return this.jobEventsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update job event successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  update(
    @Param('id') id: string,
    @Body() updateJobEventDto: UpdateJobEventDto,
  ) {
    return this.jobEventsService.update(+id, updateJobEventDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete job event successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  remove(@Param('id') id: string) {
    return this.jobEventsService.remove(+id);
  }
}
