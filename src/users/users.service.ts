import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
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
  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.password) {
      throw new HttpException(
        'Email and password should not be empty.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.UsersRepository.findOneBy({
      email: createUserDto.email,
    });
    if (user) {
      throw new HttpException('Email already exists.', HttpStatus.BAD_REQUEST);
    }
    const latestId = await this.UsersRepository.count();
    const newUser = {
      id: latestId + 1,
      name: 'Nguyen Van A',
      studentId: '20000000',
      email: createUserDto.email,
      phoneNumber: '0123456789',
      class: 'MT21KH08',
      major: 'Khoa học máy tính',
      password: createUserDto.password,
      isDeleted: false,
    };
    this.UsersRepository.save(newUser);
    return 'Add user successfully';
  }

  async findAll(): Promise<Users[] | undefined> {
    // return this.users;
    return await this.UsersRepository.find();
  }

  async findOne(id: number): Promise<Users | undefined> {
    return await this.UsersRepository.findOneBy({ id: id, isDeleted: false });
  }

  async findOneByEmail(email: string): Promise<Users | undefined> {
    return await this.UsersRepository.findOneBy({
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
    const user = await this.UsersRepository.findOneBy({
      id: id,
      isDeleted: false,
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    this.UsersRepository.update(id, updateUserDto);

    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.UsersRepository.findOneBy({
      id: id,
      isDeleted: false,
    });
    if (!user) {
      return 'User not found';
    }
    this.UsersRepository.update(id, { isDeleted: true });
    return `User which is = #${id} is deleted`;
  }
}
