import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnSafeUserDto } from '../users/dto/return-safe-user.dto';
import { GetJwtDto } from './dto/get-jwt.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(name: any, password: any): Promise<ReturnSafeUserDto | null>;
    login(user: ReturnSafeUserDto): Promise<GetJwtDto>;
}
