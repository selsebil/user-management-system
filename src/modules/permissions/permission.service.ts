import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreatePermissionDto} from './dtos/CreatePermission.dto';
import {Permission} from './permission.entity';

@Injectable()
export class PermissionService {
  constructor(@InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>) {}

  async assignPermission(createPermissionDto: CreatePermissionDto) {
    const newPermission = this.permissionRepository.create(createPermissionDto);
    return this.permissionRepository.save(newPermission);
  }

  findByUserId(id: string) {
    return this.permissionRepository.find({where: {userId: id}});
  }

  async removePermission(id: string) {
    await this.permissionRepository.delete(id);
    return {message: 'Successfully removed'};
  }
}
