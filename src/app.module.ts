import { Module } from '@nestjs/common';
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

@Module({
  imports: [BuildingsModule, ClubsModule, UsersModule, JobEventsModule],
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
