import {createParamDecorator, ExecutionContext, Query} from '@nestjs/common';
import {PaginationDto} from '../dto/pagination.dto';

export const GetPagination = createParamDecorator(
  (defaultData: PaginationDto, ctx: ExecutionContext): PaginationDto => {
    defaultData = defaultData || {};
    const request = ctx.switchToHttp().getRequest();

    let {page, pageSize} = request.query;
    page = !Number.isNaN(Number(page)) && Number.isInteger(Number(page)) ? Number(page) : null;
    pageSize = !Number.isNaN(Number(pageSize)) && Number.isInteger(Number(pageSize)) ? Number(pageSize) : null;

    return {
      page: page || defaultData.page || 1,
      pageSize: pageSize || defaultData.pageSize || 1000,
    };
  },
  [Query()],
);
