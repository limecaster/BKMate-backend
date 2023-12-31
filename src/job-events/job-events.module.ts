import { Module } from '@nestjs/common';
import { JobEventsService } from './job-events.service';
import { JobEventsController } from './job-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEvent } from './entities/job-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobEvent])],
  controllers: [JobEventsController],
  providers: [JobEventsService],
  exports: [JobEventsService, TypeOrmModule.forFeature([JobEvent])],
})
export class JobEventsModule {}
