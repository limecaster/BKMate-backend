import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { SchoolAchievement } from './school-achivement.entity';
import { SchoolAcademicProgram } from './school-academicProgram.entity';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  history: string;

  @OneToMany(
    () => SchoolAchievement,
    (schoolAchievement) => schoolAchievement.school,
  )
  achievements: SchoolAchievement[];

  @OneToMany(
    () => SchoolAcademicProgram,
    (schoolAcademicProgram) => schoolAcademicProgram.school,
  )
  academicPrograms: SchoolAcademicProgram[];
}
