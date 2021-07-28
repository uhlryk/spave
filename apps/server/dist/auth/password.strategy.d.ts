import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { ReturnSafeUserDto } from '../users/dto/return-safe-user.dto';
declare const PasswordStrategy_base: new (...args: any[]) => Strategy;
export declare class PasswordStrategy extends PasswordStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(name: string, password: string): Promise<ReturnSafeUserDto>;
}
export {};
