import { IsNumber, IsString } from 'class-validator';

/**
 * CreateClientDto: management of the clients object,
 * to define its attributes and validate fields
 */

export class CreateClientDto {
  @IsNumber()
  user_id: number;
  @IsString()
  name: string;
  @IsString()
  lastname: string;
  @IsString()
  address: string;
  @IsNumber()
  phone: number;
}
