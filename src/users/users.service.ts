import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'Đỗ Văn Bâng',
      email: 'example1@gmail.com',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 2,
      name: 'Khưu Vĩ Lương',
      email: 'example2@gmail.com',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 3,
      name: 'Lê Rin',
      email: 'example3@gmail.com',
      password: '123456',
      isDeleted: false,
    },
  ];
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async findAll(): Promise<User | undefined> {
    return this.users.find((user) => user.isDeleted != false);
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id && user.isDeleted != false);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find(
      (user) => user.email === email && user.isDeleted != false,
    );
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not found';
    }
    user.isDeleted = true;
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
