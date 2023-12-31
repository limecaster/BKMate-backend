import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubsController } from './clubs/clubs.controller';
import { UsersController } from './users/users.controller';
import { BuildingsController } from './buildings/buildings.controller';
import { JobEventsController } from './job-events/job-events.controller';
import { BuildingsModule } from './buildings/buildings.module';
import { ClubsModule } from './clubs/clubs.module';
import { UsersModule } from './users/users.module';
import { JobEventsModule } from './job-events/job-events.module';
import { ClubsService } from './clubs/clubs.service';
import { UsersService } from './users/users.service';
import { BuildingsService } from './buildings/buildings.service';
import { JobEventsService } from './job-events/job-events.service';
import { AuthModule } from './auth/auth.module';
import { SchoolModule } from './school/school.module';
import { ClubEventsModule } from './club-events/club-events.module';

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
        /* your entities here */
      ],
    }),
  ],
  controllers: [
    AppController,
    ClubsController,
    UsersController,
    BuildingsController,
    JobEventsController,
  ],
  providers: [
    AppService,
    ClubsService,
    UsersService,
    BuildingsService,
    JobEventsService,
  ],
})
export class AppModule {}
