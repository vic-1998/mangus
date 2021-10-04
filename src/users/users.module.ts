import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities';
import { Rol } from 'src/rol/entities';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Rol])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
