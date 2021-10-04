import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from '.';

/**
 * UpdateClientDto: extends the CreateClientDto
 * by making the fields of the role optional, it is a reference
 */

export class UpdateClientDto extends PartialType(CreateClientDto) {}
