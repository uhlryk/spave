import { AuthService } from './auth.service';
import { GetJwtDto } from './dto/get-jwt.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signin(req: any): Promise<GetJwtDto>;
    signup(createUserDto: CreateUserDto): Promise<boolean>;
    getProfile(req: any): any;
}
