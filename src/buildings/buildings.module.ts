import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { FunctionalBuilding } from './entities/functional-building.entity';
import { StudyBuilding } from './entities/study-building.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Classroom, FunctionalBuilding, StudyBuilding]),
  ],
  controllers: [BuildingsController],
  providers: [BuildingsService],
  exports: [
    BuildingsService,
    TypeOrmModule.forFeature([Classroom, FunctionalBuilding, StudyBuilding]),
  ],
})
export class BuildingsModule {}
