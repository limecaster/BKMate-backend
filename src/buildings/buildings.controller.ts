import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create building successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingsService.create(createBuildingDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all buildings successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.buildingsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get building successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  findOne(@Param('id') id: string) {
    return this.buildingsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update building successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  update(
    @Param('id') id: string,
    @Body() updateBuildingDto: UpdateBuildingDto,
  ) {
    return this.buildingsService.update(+id, updateBuildingDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete building successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  remove(@Param('id') id: string) {
    return this.buildingsService.remove(+id);
  }
}
