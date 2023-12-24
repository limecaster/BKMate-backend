import { Module } from '@nestjs/common';
import { ClubEventsService } from './club-events.service';
import { ClubEventsController } from './club-events.controller';

@Module({
  controllers: [ClubEventsController],
  providers: [ClubEventsService],
})
export class ClubEventsModule {}
