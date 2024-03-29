import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReturnSafeUserDto } from '../users/dto/return-safe-user.dto';

@Injectable()
export class PasswordStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(name: string, password: string): Promise<ReturnSafeUserDto> {
    const user: ReturnSafeUserDto = await this.authService.validateUser(
      name,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
