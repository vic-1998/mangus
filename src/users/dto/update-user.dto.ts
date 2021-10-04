import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '.';

/**
 * UpdateUserDto: extends the Create a CreateUserDto
 * by making the fields of the role optional, it is a reference
 */

export class UpdateUserDto extends PartialType(CreateUserDto) {}
