import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.user({ email });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { ...result } = user;
    return result;
  }
}
