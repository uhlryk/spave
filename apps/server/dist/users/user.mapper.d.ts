import { ReturnSafeUserDto } from './dto/return-safe-user.dto';
import { User } from './user.model';
export declare class UserMapper {
    static toResponse(user: User): ReturnSafeUserDto;
}
