import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from 'src/common/providers';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    /** enable guard on module  */
    { provide: APP_GUARD, useClass: AuthGuard },
    AuthService,
  ],
})
export class AuthModule {}
