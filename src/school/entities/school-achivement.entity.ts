import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { School } from './school.entity';
@Entity()
export class SchoolAchievement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  rank: string;

  @Column()
  year: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => School, (school) => school.achivement)
  school: School;
}
