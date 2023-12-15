export class CreateClubDto {
  name: any;
  description: any;
  founded: any;
  members: any;
  events: any;
  buildings: any;

  constructor(name, description, founded, members, events, buildings) {
    this.name = name;
    this.description = description;
    this.founded = founded;
    this.members = members;
    this.events = events;
    this.buildings = buildings;
  }
}
