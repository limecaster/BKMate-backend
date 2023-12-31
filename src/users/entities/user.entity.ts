import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  studentId: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  class: string;

  @Column()
  major: string;

  @Column()
  password: string;

  @Column()
  isDeleted: boolean;
}
