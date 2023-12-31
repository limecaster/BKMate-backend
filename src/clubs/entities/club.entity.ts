import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clubs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  contact: string;
}
