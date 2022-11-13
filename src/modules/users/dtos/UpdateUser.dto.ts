import {IsEmail, IsOptional} from 'class-validator';
import {STATUS} from 'constants/status.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  first_name: string;

  @IsOptional()
  last_name: string;

  @IsOptional()
  status: STATUS;
}
