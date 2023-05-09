import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.user({ email });
    const isMatch = await bcrypt.compare(user.password, pass);

    if (isMatch) {
      throw new UnauthorizedException();
    }
    const { ...result } = user;
    return result;
  }
}
