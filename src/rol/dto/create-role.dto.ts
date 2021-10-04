import { IsString } from 'class-validator';

/**
 * CreateRolDto:management of the role object,
 * to define its attributes and validate fields
 */

export class CreateRolDto {
  @IsString()
  description: string;
}
