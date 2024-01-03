import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Classroom } from './classroom.entity';

@Entity()
export class StudyBuilding {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(() => Classroom, (classroom) => classroom.studyBuilding, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  classrooms: Classroom[];
}
