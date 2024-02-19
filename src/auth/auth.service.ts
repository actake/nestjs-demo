import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, userName: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
