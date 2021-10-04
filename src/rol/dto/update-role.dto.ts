import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from '.';

/**
 * UpdateRoleDto extiende al Dto de Crear un role
 * haciendo que los campos de este sean opcianles
 */

export class UpdateRolDto extends PartialType(CreateRolDto) {}
