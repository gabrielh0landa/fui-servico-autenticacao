import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user-entity.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
