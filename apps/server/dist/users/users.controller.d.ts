import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnSafeUserDto } from './dto/return-safe-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<ReturnSafeUserDto>;
    findAll(): Promise<ReturnSafeUserDto[]>;
    findOne(id: string): Promise<ReturnSafeUserDto>;
    remove(id: string): Promise<void>;
}
