import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async getAllUsers(): Promise<Users[]> {
    return await this.userRepository.find();
  }
  async getUserById(id: number) {
    const userById = await this.userRepository.findOne(id);
    if (!userById) throw new NotFoundException('Not exists');
    return userById;
  }
  async createUser(dto: CreateUserDto) {
    const createUser = this.userRepository.create(dto);
    return await this.userRepository.save(createUser);
  }
  async updateUser(id: number, dto: UpdateUserDto) {
    const getUser = await this.getUserById(id);
    const updateUser = Object.assign(getUser, dto);
    return await this.userRepository.save(updateUser);
  }
  async deleteUser(id: number) {
    const getUser = await this.getUserById(id);
    return await this.userRepository.remove(getUser);
  }
}
