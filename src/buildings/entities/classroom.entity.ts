import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { StudyBuilding } from './study-building.entity';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  latitude: string;

  @Column({ nullable: true })
  longitude: string;

  @ManyToOne(() => StudyBuilding, (studyBuilding) => studyBuilding.classrooms)
  @JoinColumn({ name: 'studyBuildingId' })
  studyBuilding: StudyBuilding;
}
