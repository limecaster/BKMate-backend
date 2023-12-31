import { Module } from '@nestjs/common';
import { ClubEventsService } from './club-events.service';
import { ClubEventsController } from './club-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEvent } from './entities/club-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClubEvent])],
  controllers: [ClubEventsController],
  providers: [ClubEventsService],
  exports: [ClubEventsService, TypeOrmModule.forFeature([ClubEvent])],
})
export class ClubEventsModule {}
