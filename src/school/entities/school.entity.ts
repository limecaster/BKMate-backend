import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SchoolAchievement } from './school-achivement.entity';
import { SchoolAcademicProgram } from './school-academicProgram.entity';
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
    (schoolAchievement) => schoolAchievement.id,
  )
  achivement: SchoolAchievement[];

  @OneToMany(
    () => SchoolAcademicProgram,
    (schoolAcademicProgram) => schoolAcademicProgram.id,
  )
  academicPrograms: SchoolAcademicProgram[];
}
