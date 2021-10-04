import { IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsNumber()
  role_id: number;
}
