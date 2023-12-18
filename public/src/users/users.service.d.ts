import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export type User = any;
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<User | undefined>;
    findOne(id: number): Promise<User | undefined>;
    findOneByEmail(email: string): Promise<User | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: number): string;
}
