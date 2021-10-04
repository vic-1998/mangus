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
import { CreateClientDto, UpdateClientDto } from './dto';
import { EmployeesService } from './employees.service';

@Controller('clients')
export class EmployeesController {
  constructor(private readonly clientService: EmployeesService) {}
  @Get()
  getAllClients() {
    return this.clientService.getAllClients();
  }
  @Get(':id')
  getOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.getOneClient(id);
  }
  @Post()
  createClient(@Body() dto: CreateClientDto) {
    return this.clientService.createClient(dto);
  }
  @Put(':id')
  updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateClientDto,
  ) {
    return this.clientService.updateClient(id, dto);
  }
  @Delete(':id')
  deleteClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.deleteClient(id);
  }
}
