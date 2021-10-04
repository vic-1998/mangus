import { IsString } from 'class-validator';

/**
 * CreateUserDto:management of the users object,
 * to define its attributes and validate fields
 */

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  role_id: number;
}
