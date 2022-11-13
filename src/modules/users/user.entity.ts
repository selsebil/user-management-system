import {STATUS} from 'constants/status.enum';
import {Permission} from 'modules/permissions/permission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
@Unique(['email'])
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Index({fulltext: true})
  @Column('text', {nullable: false})
  public username: string;

  @Index({fulltext: true})
  @Column('text', {nullable: false})
  public password: string;

  @Index({fulltext: true})
  @Column('text', {nullable: false})
  public email: string;

  @Index({fulltext: true})
  @Column('text', {nullable: true})
  public first_name: string;

  @Index({fulltext: true})
  @Column('text', {nullable: true})
  public last_name: string;

  @Column({
    type: 'enum',
    enum: STATUS,
    default: STATUS.ACTIVE,
  })
  public status: STATUS;

  @OneToMany(() => Permission, (permission) => permission.user, {
    nullable: true,
    cascade: ['insert', 'update'],
  })
  public permission: Permission[];

  @CreateDateColumn()
  public createdAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
