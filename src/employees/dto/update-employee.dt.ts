import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from '.';

/**
 * UpdateEmployeeDto: extends the CreateEmployeeDto
 * by making the fields of the role optional, it is a reference
 */

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
