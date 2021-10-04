import { IsNumber, IsString } from 'class-validator';

/**
 * CreateEmployeeDto:management of the role object,
 * to define its attributes and validate fields
 */

export class CreateEmployeeDto {
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
