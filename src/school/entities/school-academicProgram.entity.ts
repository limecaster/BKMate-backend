import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { School } from './school.entity';

@Entity()
export class SchoolAcademicProgram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => School, (school) => school.academicPrograms)
  @JoinColumn({ name: 'schoolId' })
  school: School;
}
