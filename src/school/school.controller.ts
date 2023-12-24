import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create school successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all schools successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.schoolService.find();
  }

  @Put()
  @ApiResponse({ status: 200, description: 'Update school successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(updateSchoolDto);
  }

  @Delete()
  @ApiResponse({ status: 200, description: 'Delete school successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove() {
    return this.schoolService.remove();
  }
}
