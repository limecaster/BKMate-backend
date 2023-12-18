import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(createUserDto: CreateUserDto): Promise<any>;
    getProfile(req: any): Promise<any>;
}
