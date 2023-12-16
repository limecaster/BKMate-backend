import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(createUserDto.email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (user.password !== createUserDto.password) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = { sub: user.id, email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
