import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {CreatePermissionDto} from './dtos/CreatePermission.dto';
import {PermissionService} from './permission.service';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('/:id')
  @ApiOperation({summary: 'Get All permissions for User'})
  findPermissionsByUserId(@Param('id') id: string) {
    return this.permissionService.findByUserId(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  @ApiOperation({summary: 'Assign permission'})
  assignPermission(@Body() data: CreatePermissionDto) {
    return this.permissionService.assignPermission(data);
  }

  @Delete('/:id')
  @ApiOperation({summary: 'Remove permission'})
  async removePermission(@Param('id') id: string) {
    return this.permissionService.removePermission(id);
  }
}
