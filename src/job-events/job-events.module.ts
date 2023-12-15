import { Module } from '@nestjs/common';
import { JobEventsService } from './job-events.service';
import { JobEventsController } from './job-events.controller';

@Module({
  controllers: [JobEventsController],
  providers: [JobEventsService],
})
export class JobEventsModule {}
