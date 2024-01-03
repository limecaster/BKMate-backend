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
import { StudyBuildingDto } from './dto/study-building.dto';
import { FunctionalBuildingDto } from './dto/functional-building.dto';
import { ClassroomDto } from './dto/classroom.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Get('study-buildings')
  @ApiResponse({
    status: 200,
    description: 'Get all study buildings successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllStudyBuildings() {
    return this.buildingsService.getAllStudyBuildings();
  }

  @Get('study-buildings/:id')
  @ApiResponse({ status: 200, description: 'Get study building successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  getStudyBuilding(@Param('id') id: number) {
    return this.buildingsService.getStudyBuilding(id);
  }

  @Get('functional-buildings')
  @ApiResponse({
    status: 200,
    description: 'Get all functional buildings successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllFunctionalBuildings() {
    return this.buildingsService.getAllFunctionalBuildings();
  }

  @Get('functional-buildings/:id')
  @ApiResponse({
    status: 200,
    description: 'Get functional building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  getFunctionalBuilding(@Param('id') id: number) {
    return this.buildingsService.getFunctionalBuilding(id);
  }

  @Get('classrooms')
  @ApiResponse({ status: 200, description: 'Get all classrooms successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllGlobalClassrooms() {
    return this.buildingsService.getAllClassrooms();
  }

  @Get('classrooms/:id')
  @ApiResponse({ status: 200, description: 'Get classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  getGlobalClassroom(@Param('id') id: number) {
    return this.buildingsService.getClassroom(id);
  }
  @Get('study-buildings/:id/classrooms')
  @ApiResponse({ status: 200, description: 'Get all classrooms successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getAllClassrooms(@Param('id') id: number) {
    return await this.buildingsService.getClassroomsOfStudyBuilding(id);
  }

  @Get('study-buildings/:id1/classrooms/:id2')
  @ApiResponse({ status: 200, description: 'Get classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  getClassroom(@Param('id1') id1: number, @Param('id2') id2: number) {
    return this.buildingsService.getClassroomOfStudyBuilding(
      Number(id1),
      Number(id2),
    );
  }

  @Post('study-buildings')
  @ApiResponse({
    status: 201,
    description: 'Create study building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createStudyBuilding(@Body() studyBuildingDto: StudyBuildingDto) {
    return this.buildingsService.createStudyBuilding(studyBuildingDto);
  }

  @Post('functional-buildings')
  @ApiResponse({
    status: 201,
    description: 'Create functional building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createFunctionalBuilding(
    @Body() functionalBuildingDto: FunctionalBuildingDto,
  ) {
    return this.buildingsService.createFunctionalBuilding(
      functionalBuildingDto,
    );
  }

  // @Post('classrooms')
  // @ApiResponse({ status: 201, description: 'Create classroom successfully' })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // createClassroom(@Body() classroomDto: ClassroomDto) {
  //   return this.buildingsService.createClassroom(classroomDto);
  // }

  @Post('study-buildings/:id/classrooms')
  @ApiResponse({ status: 201, description: 'Add classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  addClassroomToStudyBuilding(
    @Param('id') id: number,
    @Body() classroomDto: ClassroomDto,
  ) {
    return this.buildingsService.addClassroomToStudyBuilding(
      Number(id),
      classroomDto,
    );
  }

  @Put('study-buildings/:id')
  @ApiResponse({
    status: 200,
    description: 'Update study building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  updateStudyBuilding(
    @Param('id') id: number,
    @Body() studyBuildingDto: StudyBuildingDto,
  ) {
    return this.buildingsService.updateStudyBuilding(id, studyBuildingDto);
  }

  @Put('functional-buildings/:id')
  @ApiResponse({
    status: 200,
    description: 'Update functional building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  updateFunctionalBuilding(
    @Param('id') id: number,
    @Body() functionalBuildingDto: FunctionalBuildingDto,
  ) {
    return this.buildingsService.updateFunctionalBuilding(
      id,
      functionalBuildingDto,
    );
  }

  @Put('classrooms/:id')
  @ApiResponse({ status: 200, description: 'Update classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  updateClassroom(@Param('id') id: number, @Body() classroomDto: ClassroomDto) {
    return this.buildingsService.updateClassroom(id, classroomDto);
  }

  @Delete('study-buildings/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete study building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  removeStudyBuilding(@Param('id') id: number) {
    return this.buildingsService.deleteStudyBuilding(id);
  }

  @Delete('functional-buildings/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete functional building successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  removeFunctionalBuilding(@Param('id') id: number) {
    return this.buildingsService.deleteFunctionalBuilding(id);
  }

  @Delete('classrooms/:id')
  @ApiResponse({ status: 200, description: 'Delete classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  removeClassroom(@Param('id') id: number) {
    return this.buildingsService.deleteClassroom(id);
  }

  @Delete('study-buildings/:id/classrooms')
  @ApiResponse({ status: 200, description: 'Delete classroom successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  removeClassroomsOfStudyBuilding(@Param('id') id: number) {
    return this.buildingsService.deleteClassroomsOfStudyBuilding(id);
  }
}
