import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities';
import { CreateClientDto, UpdateClientDto } from './dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly userRepository: Repository<Client>,
  ) {}
  async getAllClients(): Promise<Client[]> {
    return await this.userRepository.find();
  }
  async getOneClient(id: number) {
    const getUserById = await this.userRepository.findOne(id);
    if (!getUserById) throw new NotFoundException('Not exists');
    return getUserById;
  }
  async createClient(dto: CreateClientDto) {
    const createUser = this.userRepository.create(dto);
    return await this.userRepository.save(createUser);
  }
  async updateClient(id: number, dto: UpdateClientDto) {
    const getUser = await this.getOneClient(id);
    const updateUser = Object.assign(getUser, dto);
    return await this.userRepository.save(updateUser);
  }
  async deleteClient(id: number) {
    const getUser = await this.getOneClient(id);
    return await this.userRepository.remove(getUser);
  }
}
