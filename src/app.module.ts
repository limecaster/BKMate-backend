import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClubsController } from './clubs/clubs.controller';
import { UsersController } from './users/users.controller';
import { BuildingsController } from './buildings/buildings.controller';
import { JobEventsController } from './job-events/job-events.controller';
import { AuthController } from './auth/auth.controller';
import { ClubEventsController } from './club-events/club-events.controller';
import { SchoolController } from './school/school.controller';

import { BuildingsModule } from './buildings/buildings.module';
import { ClubsModule } from './clubs/clubs.module';
import { UsersModule } from './users/users.module';
import { JobEventsModule } from './job-events/job-events.module';
import { AuthModule } from './auth/auth.module';
import { SchoolModule } from './school/school.module';
import { ClubEventsModule } from './club-events/club-events.module';

import { ClubsService } from './clubs/clubs.service';
import { UsersService } from './users/users.service';
import { BuildingsService } from './buildings/buildings.service';
import { JobEventsService } from './job-events/job-events.service';
import { AuthService } from './auth/auth.service';
import { ClubEventsService } from './club-events/club-events.service';
import { SchoolService } from './school/school.service';

import { Users } from './users/entities/user.entity';
import { Club } from './clubs/entities/club.entity';
import { ClubEvent } from './club-events/entities/club-event.entity';
import { School } from './school/entities/school.entity';
import { SchoolAchievement } from './school/entities/school-achivement.entity';
import { SchoolAcademicProgram } from './school/entities/school-academicProgram.entity';

@Module({
  imports: [
    BuildingsModule,
    ClubsModule,
    UsersModule,
    JobEventsModule,
    AuthModule,
    SchoolModule,
    ClubEventsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cm87j3un7f5s73cf11l0-a.postgres.render.com',
      port: 5432,
      username: 'pencilsoldier',
      password: 'Fc0PkKwWG3o3MR44ouJnn7GbTmVvVvs3',
      database: 'bkmate',
      synchronize: true, // Auto-create database schema (for development only)
      logging: true, // Enable logging (for development only)
      entities: [
        Users,
        Club,
        ClubEvent,
        School,
        SchoolAchievement,
        SchoolAcademicProgram,
      ],
    }),
  ],
  controllers: [
    AppController,
    ClubsController,
    ClubEventsController,
    UsersController,
    AuthController,
    BuildingsController,
    JobEventsController,
    SchoolController,
  ],
  providers: [
    AppService,
    ClubsService,
    UsersService,
    BuildingsService,
    JobEventsService,
    AuthService,
    ClubEventsService,
    SchoolService,
  ],
})
export class AppModule {}
