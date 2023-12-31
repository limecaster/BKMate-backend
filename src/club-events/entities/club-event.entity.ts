import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClubEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  thumbnail: string;
}
