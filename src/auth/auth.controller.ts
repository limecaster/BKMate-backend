import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('/signin')
  @ApiResponse({ status: 200, description: 'Sign in successfully' })
  @ApiResponse({ status: 400, description: 'Invalid email or password' })
  async signIn(@Body() createUserDto: CreateUserDto) {
    return this.authService.signIn(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  @ApiResponse({ status: 200, description: 'Get profile successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getProfile(@Request() req) {
    return req.user;
  }
}
