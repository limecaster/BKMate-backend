import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private users = [
    {
      id: 1,
      name: 'Đỗ Văn Bâng',
      studentId: '20173281',
      email: 'example1@gmail.com',
      phoneNumber: '0123456789',
      class: 'MT21KH08',
      major: 'Khoa học máy tính',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 2,
      name: 'Khưu Vĩ Lương',
      studentId: '20173282',
      email: 'example2@gmail.com',
      phoneNumber: '0123456789',
      class: 'MT21KH08',
      major: 'Khoa học máy tính',
      password: '123456',
      isDeleted: false,
    },
    {
      id: 3,
      name: 'Lê Rin',
      studentId: '20173283',
      email: 'example3@gmail.com',
      phoneNumber: '0123456789',
      class: 'MT21KH08',
      major: 'Khoa học máy tính',
      password: '123456',
      isDeleted: false,
    },
  ];
  create(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.password) {
      throw new HttpException(
        'Email and password should not be empty.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = this.usersRepository.findOneBy({ email: createUserDto.email });
    if (user) {
      throw new HttpException('Email already exists.', HttpStatus.BAD_REQUEST);
    }
    const newUser = {
      id: this.users.length + 1,
      name: 'Nguyen Van A',
      studentId: '20000000',
      email: createUserDto.email,
      phoneNumber: '0123456789',
      class: 'MT21KH08',
      major: 'Khoa học máy tính',
      password: createUserDto.password,
      isDeleted: false,
    };
    this.usersRepository.save(newUser);
    return 'Add user successfully';
  }

  async findAll(): Promise<User[] | undefined> {
    // return this.users;
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id && user.isDeleted == false);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({
      email: email,
      isDeleted: false,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (!updateUserDto.email || !updateUserDto.password) {
      throw new HttpException(
        'Email and password should not be empty.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = this.usersRepository.findOneBy({
      id: id,
      isDeleted: false,
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    this.usersRepository.update(id, updateUserDto);

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const user = this.usersRepository.findOneBy({ id: id, isDeleted: false });
    if (!user) {
      return 'User not found';
    }
    this.usersRepository.update(id, { isDeleted: true });
    return `User which is = #${id} is deleted`;
  }
}
