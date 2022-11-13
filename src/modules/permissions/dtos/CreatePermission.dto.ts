import {IsNotEmpty} from 'class-validator';

export class CreatePermissionDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  userId: string;
}
