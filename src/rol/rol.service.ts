import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Rol } from './entities/rol.entity';
import { CreateRolDto, UpdateRolDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}
  async getAllRoles(): Promise<Rol[]> {
    return await this.rolRepository.find();
  }
  async getRolById(id: number) {
    const getOneRol = await this.rolRepository.findOne(id);
    if (!getOneRol) throw new NotFoundException('Not Exists');
    return getOneRol;
  }
  async createdRol(dto: CreateRolDto) {
    const createRol = await this.rolRepository.create(dto);
    return await this.rolRepository.save(createRol);
  }
  async updateRol(id: number, dto: UpdateRolDto) {
    const getOneRol = await this.getRolById(id);
    const updateRol = Object.assign(getOneRol, dto);
    return await this.rolRepository.save(updateRol);
  }
  async deleteRol(id: number) {
    const getOneRol = await this.getRolById(id);
    return await this.rolRepository.remove(getOneRol);
  }
}
