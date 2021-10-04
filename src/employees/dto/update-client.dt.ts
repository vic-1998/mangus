import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from '.';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
