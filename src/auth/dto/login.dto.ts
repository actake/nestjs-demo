import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class LoginInputDTO extends PickType(CreateUserDto, [
  'email',
  'password',
]) {}
