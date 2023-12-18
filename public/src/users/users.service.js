"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
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
    }
    create(createUserDto) {
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
    async findAll() {
        return this.users.filter((user) => user.isDeleted == false);
    }
    async findOne(id) {
        return this.users.find((user) => user.id === id && user.isDeleted == false);
    }
    async findOneByEmail(email) {
        return this.users.find((user) => user.email === email && user.isDeleted == false);
    }
    async update(id, updateUserDto) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return 'User not found';
        }
        user.name = updateUserDto.name;
        user.password = updateUserDto.password;
        user.studentId = updateUserDto.studentId;
        return `This action updates a #${id} user`;
    }
    remove(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return 'User not found';
        }
        user.isDeleted = true;
        return `User which is = #${id} is deleted`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map