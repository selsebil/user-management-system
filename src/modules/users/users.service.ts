import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PaginationDto} from 'core/dto/pagination.dto';
import {hashString} from 'helpers/helper';
import {Repository} from 'typeorm';
import {CreateUserDto} from './dtos/CreateUser.dto';
import {UpdateUserDto} from './dtos/UpdateUser.dto';
import {User} from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: [{email: createUserDto.email}, {username: createUserDto.username}],
    });
    if (existUser) {
      throw new BadRequestException('Already exist user with that email/username');
    }
    createUserDto.password = await hashString(createUserDto.password);
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async getUsers(pagination: PaginationDto = {}) {
    const {page, pageSize} = pagination;
    const count = await this.userRepository.count();
    const users = await this.userRepository
      .createQueryBuilder('users')
      .skip(pageSize * (page - 1))
      .take(pageSize)
      .orderBy('users.updatedAt', 'DESC')
      .getMany();

    return {data: users, count};
  }

  findUsersById(id: string) {
    return this.userRepository.findOne(id);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const existUser = await this.userRepository.findOne(id);
    if (!existUser) {
      throw new BadRequestException(`User doesn't exist`);
    }
    await this.userRepository.update(id, updateUserDto);
    return {message: 'Successfully updated'};
  }

  async deleteUser(id: string) {
    const existUser = await this.userRepository.findOne(id);
    if (!existUser) {
      throw new BadRequestException(`User doesn't exist`);
    }
    await this.userRepository.delete(id);
    return {message: 'Successfully deleted'};
  }
}
