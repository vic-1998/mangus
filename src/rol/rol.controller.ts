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
import { CreateRolDto, UpdateRolDto } from './dto';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}
  @Get()
  async getAllRol() {
    return await this.rolService.getAllRol();
  }
  @Get(':id')
  async getOneRol(@Param('id', ParseIntPipe) id: number) {
    return await this.rolService.getOneRol(id);
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
