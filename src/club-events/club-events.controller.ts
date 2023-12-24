import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubEventsService } from './club-events.service';
import { CreateClubEventDto } from './dto/create-club-event.dto';
import { UpdateClubEventDto } from './dto/update-club-event.dto';

@Controller('club-events')
export class ClubEventsController {
  constructor(private readonly clubEventsService: ClubEventsService) {}

  @Post()
  create(@Body() createClubEventDto: CreateClubEventDto) {
    return this.clubEventsService.create(createClubEventDto);
  }

  @Get()
  findAll() {
    return this.clubEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubEventsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateClubEventDto: UpdateClubEventDto,
  ) {
    return this.clubEventsService.update(+id, updateClubEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubEventsService.remove(+id);
  }
}
