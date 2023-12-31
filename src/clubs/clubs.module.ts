import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clubs } from './entities/club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clubs])],
  controllers: [ClubsController],
  providers: [ClubsService],
  exports: [ClubsService, TypeOrmModule.forFeature([Clubs])],
})
export class ClubsModule {}
