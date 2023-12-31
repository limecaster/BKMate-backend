import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { SchoolAcademicProgram } from './entities/school-academicProgram.entity';
import { SchoolAchievement } from './entities/school-achivement.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      School,
      SchoolAcademicProgram,
      SchoolAchievement,
    ]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [
    SchoolService,
    TypeOrmModule.forFeature([
      School,
      SchoolAcademicProgram,
      SchoolAchievement,
    ]),
  ],
})
export class SchoolModule {}
