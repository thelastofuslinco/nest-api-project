import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [UserModule],
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
