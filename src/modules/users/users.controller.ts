import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {GetPagination} from 'core/decorators/getPagination.decorator';
import {PaginationDto} from 'core/dto/pagination.dto';
import {CreateUserDto} from './dtos/CreateUser.dto';
import {UpdateUserDto} from './dtos/UpdateUser.dto';
import {UsersService} from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'Get All Users'})
  getUsers(@GetPagination() pagination: PaginationDto) {
    return this.userService.getUsers(pagination);
  }

  @Get('/:id')
  @ApiOperation({summary: 'Get One User By Id'})
  findUsersById(@Param('id') id: string) {
    return this.userService.findUsersById(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  @ApiOperation({summary: 'Create User'})
  createUsers(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Patch('/:id')
  @ApiOperation({summary: 'Update an existing user'})
  async updateUser(@Param('id') id: string, @Body(new ValidationPipe()) data: UpdateUserDto) {
    return this.userService.updateUser(id, data);
  }

  @Delete('/:id')
  @ApiOperation({summary: 'Delete user'})
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
