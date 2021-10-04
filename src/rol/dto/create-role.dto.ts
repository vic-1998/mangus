import { IsString } from 'class-validator';

export class CreateRolDto {
  @IsString()
  description: string;
}
