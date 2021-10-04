import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly userRepository: Repository<Employee>,
  ) {}
  async getAllEmployees(): Promise<Employee[]> {
    return await this.userRepository.find();
  }
  async getEmployeeById(id: number) {
    const getUserById = await this.userRepository.findOne(id);
    if (!getUserById) throw new NotFoundException('Not exists');
    return getUserById;
  }
  async createEmployee(dto: CreateEmployeeDto) {
    const createUser = this.userRepository.create(dto);
    return await this.userRepository.save(createUser);
  }
  async updateEmployee(id: number, dto: UpdateEmployeeDto) {
    const getUser = await this.getEmployeeById(id);
    const updateUser = Object.assign(getUser, dto);
    return await this.userRepository.save(updateUser);
  }
  async deleteEmployee(id: number) {
    const getUser = await this.getEmployeeById(id);
    return await this.userRepository.remove(getUser);
  }
}
