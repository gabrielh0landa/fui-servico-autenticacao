import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { UsersModule } from '../users/users.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user-entity.js';

@Module({
  imports: [
      TypeOrmModule.forFeature([User]), 
    ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
