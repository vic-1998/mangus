import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto';
import { EmployeesService } from './employees.service';

@Controller('clients')
export class EmployeesController {
  constructor(private readonly clientService: EmployeesService) {}
  @Get()
  getAllEmployees() {
    return this.clientService.getAllEmployees();
  }
  @Get(':id')
  getEmployeeById(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.getEmployeeById(id);
  }
  @Post()
  createEmployee(@Body() dto: CreateEmployeeDto) {
    return this.clientService.createEmployee(dto);
  }
  @Put(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.clientService.updateEmployee(id, dto);
  }
  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.deleteEmployee(id);
  }
}
