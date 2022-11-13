import {ApiProperty} from '@nestjs/swagger';
import {Exclude, Expose, Transform, Type} from 'class-transformer';
import {IsInt, IsOptional, Max, Min} from 'class-validator';
import {Pagination} from '../interfaces/pagination';

@Exclude()
export class PaginationDto implements Pagination {
  @Expose()
  @ApiProperty({
    type: 'integer',
    example: 100,
    required: false,
  })
  @Type(() => Number)
  @Transform(({value}) => value || 100)
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  public pageSize?: number;

  @Expose()
  @ApiProperty({
    type: 'integer',
    example: 0,
    required: false,
  })
  @Type(() => Number)
  @Transform(({value}) => value || 1)
  @IsOptional()
  @IsInt()
  @Min(1)
  public page?: number;
}
