import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateRoleDto } from './dto';

@Controller('roles')
export class RolesController {
  @Get()
  getRoles() {
    return 'Obtener roles...';
  }
  @Get(':id')
  getRole(@Param('id') id: string) {
    return {
      message: 'Obtener rol por 1...',
      id,
    };
  }
  @Post()
  createdRole(@Body() dto: CreateRoleDto) {
    return dto;
  }
  @Put('id')
  updateRole(@Param('id') id: string) {
    return {
      message: 'Actualizando role...',
      id,
    };
  }
  @Delete('id')
  deleteRole(@Param('id') id: string) {
    return {
      message: 'eliminado role...',
      id,
    };
  }
}
