import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create club successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubsService.create(createClubDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all clubs successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.clubsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get club successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  findOne(@Param('id') id: string) {
    return this.clubsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update club successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubsService.update(+id, updateClubDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete club successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  remove(@Param('id') id: string) {
    return this.clubsService.remove(+id);
  }
}
