import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('date')
  start: string;

  @Column('date')
  end: string;

  @Column()
  location: string;

  @Column()
  company: string;

  @Column()
  contact: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  status: string;

  @Column()
  createdBy: string;
}
