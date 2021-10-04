import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto, UpdateRolDto } from './dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}
  @Get()
  async getAllRoles() {
    return await this.rolService.getAllRoles();
  }
  @Get(':id')
  async getRolById(@Param('id', ParseIntPipe) id: number) {
    return await this.rolService.getRolById(id);
  }
  @Post()
  async createdRol(@Body() dto: CreateRolDto) {
    const createRol = await this.rolService.createdRol(dto);
    return {
      message: 'Creado correctamente',
      createRol,
    };
  }
  @Put(':id')
  async updateRol(@Param('id') id: number, @Body() dto: UpdateRolDto) {
    return await this.rolService.updateRol(id, dto);
  }
  @Delete(':id')
  async deleteRol(@Param('id', ParseIntPipe) id: number) {
    return await this.rolService.deleteRol(id);
  }
}
