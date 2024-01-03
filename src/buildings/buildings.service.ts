import { Injectable } from '@nestjs/common';
import { StudyBuildingDto } from './dto/study-building.dto';
import { FunctionalBuildingDto } from './dto/functional-building.dto';
import { ClassroomDto } from './dto/classroom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classroom } from './entities/classroom.entity';
import { StudyBuilding } from './entities/study-building.entity';
import { FunctionalBuilding } from './entities/functional-building.entity';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
    @InjectRepository(StudyBuilding)
    private studyBuildingRepository: Repository<StudyBuilding>,
    @InjectRepository(FunctionalBuilding)
    private functionalBuildingRepository: Repository<FunctionalBuilding>,
  ) {}

  getAllStudyBuildings() {
    return this.studyBuildingRepository.find();
  }

  getAllFunctionalBuildings() {
    return this.functionalBuildingRepository.find();
  }

  getStudyBuilding(id: number) {
    return this.studyBuildingRepository.findOneBy({ id });
  }

  getFunctionalBuilding(id: number) {
    return this.functionalBuildingRepository.findOneBy({ id });
  }

  getAllClassrooms() {
    return this.classroomRepository.find();
  }

  getClassroom(id: number) {
    return this.classroomRepository.findOneBy({ id });
  }

  createStudyBuilding(studyBuildingDto: StudyBuildingDto) {
    const studyBuilding = new StudyBuilding();

    studyBuilding.name = studyBuildingDto.name;
    studyBuilding.image = studyBuildingDto.image;
    this.studyBuildingRepository.save(studyBuilding);

    studyBuildingDto.classRoom.forEach((classroom) => {
      const classroomEntity = new Classroom();

      classroomEntity.name = classroom.name;
      classroomEntity.title = classroom.title;
      classroomEntity.type = classroom.type;
      classroomEntity.description = classroom.description;
      classroomEntity.image = classroom.image;
      classroomEntity.latitude = classroom.latitude;
      classroomEntity.longitude = classroom.longitude;
      classroomEntity.studyBuilding = studyBuilding;

      this.classroomRepository.save(classroomEntity);
      console.log('classroomEntity', this.classroomRepository.find());
    });

    return studyBuilding;
  }

  async addClassroomToStudyBuilding(id: number, classroomDto: ClassroomDto) {
    return this.studyBuildingRepository
      .findOne({ where: { id }, relations: ['classrooms'] })
      .then(async (studyBuilding) => {
        console.log('studyBuilding', studyBuilding);
        console.log('classroomDto', classroomDto);
        const classroom = new Classroom();
        classroom.name = classroomDto.name;
        classroom.title = classroomDto.title;
        classroom.type = classroomDto.type;
        classroom.description = classroomDto.description;
        classroom.image = classroomDto.image;
        classroom.latitude = classroomDto.latitude;
        classroom.longitude = classroomDto.longitude;
        classroom.studyBuilding = studyBuilding;
        await this.classroomRepository.save(classroom);
        studyBuilding.classrooms.push(classroom);
        return this.studyBuildingRepository.save(studyBuilding);
      });
  }

  async getClassroomsOfStudyBuilding(id: number) {
    return this.studyBuildingRepository.find({
      where: { id },
      relations: ['classrooms'],
    });
  }

  async getClassroomOfStudyBuilding(id1: number, id2: number) {
    const studyBuildingContain = await this.studyBuildingRepository.findOne({
      where: { id: id1 },
      relations: ['classrooms'],
    });

    if (studyBuildingContain) {
      const classroom = studyBuildingContain.classrooms.find((classroom) => {
        return classroom.id === id2;
      });

      return classroom;
    } else {
      return null;
    }
  }

  async deleteClassroomsOfStudyBuilding(id: number) {
    return this.studyBuildingRepository
      .findOneBy({ id })
      .then((studyBuilding) => {
        studyBuilding.classrooms = [];
        return this.studyBuildingRepository.save(studyBuilding);
      });
  }

  createFunctionalBuilding(functionalBuildingDto: FunctionalBuildingDto) {
    const functionalBuilding = new FunctionalBuilding();
    functionalBuilding.name = functionalBuildingDto.name;
    functionalBuilding.description = functionalBuildingDto.description;
    functionalBuilding.image = functionalBuildingDto.image;
    functionalBuilding.latitude = functionalBuildingDto.latitude;
    functionalBuilding.longitude = functionalBuildingDto.longitude;

    return this.functionalBuildingRepository.save(functionalBuilding);
  }

  createClassroom(classroomDto: ClassroomDto) {
    const classroom = new Classroom();
    classroom.name = classroomDto.name;
    classroom.title = classroomDto.title;
    classroom.type = classroomDto.type;
    classroom.description = classroomDto.description;
    classroom.image = classroomDto.image;
    classroom.latitude = classroomDto.latitude;
    classroom.longitude = classroomDto.longitude;

    return this.classroomRepository.save(classroom);
  }

  updateStudyBuilding(id: number, studyBuildingDto: StudyBuildingDto) {
    return this.studyBuildingRepository.update(id, studyBuildingDto);
  }

  updateFunctionalBuilding(
    id: number,
    functionalBuildingDto: FunctionalBuildingDto,
  ) {
    return this.functionalBuildingRepository.update(id, functionalBuildingDto);
  }

  updateClassroom(id: number, classroomDto: ClassroomDto) {
    return this.classroomRepository.update(id, classroomDto);
  }

  deleteStudyBuilding(id: number) {
    return this.studyBuildingRepository.delete(id);
  }

  deleteFunctionalBuilding(id: number) {
    return this.functionalBuildingRepository.delete(id);
  }

  deleteClassroom(id: number) {
    return this.classroomRepository.delete(id);
  }
}
