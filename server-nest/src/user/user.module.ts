import { Module } from '@nestjs/common';
import { UsersService } from './user.service';

@Module({
  controllers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}