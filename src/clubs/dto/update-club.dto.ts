import { PartialType } from '@nestjs/mapped-types';
import { CreateClubDto } from './create-club.dto';

export class UpdateClubDto extends PartialType(CreateClubDto) {
  name: any;
  description: any;
  founded: any;
  members: any;
  events: any;
  buildings: any;

  constructor(name, description, founded, members, events, buildings) {
    super();
    this.name = name;
    this.description = description;
    this.founded = founded;
    this.members = members;
    this.events = events;
    this.buildings = buildings;
  }
}
