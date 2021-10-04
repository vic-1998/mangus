import { IsNumber, IsString } from 'class-validator';
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
