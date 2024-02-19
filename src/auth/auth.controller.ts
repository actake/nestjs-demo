import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { LoginInputDTO } from './dto/login.dto';
import { Public } from 'src/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginInputDTO: LoginInputDTO) {
    return this.authService.login(loginInputDTO.email, loginInputDTO.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
