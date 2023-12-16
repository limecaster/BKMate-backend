import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Đỗ Văn Bâng',
      studentId: '20173281',
      email: 'example1@gmail.com',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 2,
      name: 'Khưu Vĩ Lương',
      studentId: '20173282',
      email: 'example2@gmail.com',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 3,
      name: 'Lê Rin',
      studentId: '20173283',
      email: 'example3@gmail.com',
      password: '123456',
      isDeleted: false,
    },
  ];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name: 'Nguyen Van A',
      studentId: '20000000',
      email: createUserDto.email,
      password: createUserDto.password,
      isDeleted: false,
    };
    this.users.push(newUser);
    return 'Add user successfully';
  }

  async findAll(): Promise<User | undefined> {
    // return this.users;
    return this.users.filter((user) => user.isDeleted == false);
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id && user.isDeleted == false);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(
      (user) => user.email === email && user.isDeleted == false,
    );
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not found';
    }
    user.name = updateUserDto.name;
    user.password = updateUserDto.password;
    user.studentId = updateUserDto.studentId;

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not found';
    }
    user.isDeleted = true;
    return `User which is = #${id} is deleted`;
  }
}
