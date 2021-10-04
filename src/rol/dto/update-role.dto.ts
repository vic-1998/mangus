import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from '.';

/**
 * UpdateRoleDto: extends the Create a role
 * by making the fields of the role optional, it is a reference
 */

export class UpdateRolDto extends PartialType(CreateRolDto) {}
