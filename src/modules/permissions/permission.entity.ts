import {User} from 'modules/users/user.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Index({fulltext: true})
  @Column('text', {nullable: false})
  public code: string;

  @Index({fulltext: true})
  @Column('text', {nullable: false})
  public description: string;

  @ManyToOne(() => User, {nullable: false, onDelete: 'CASCADE'})
  @JoinColumn()
  public user: User;

  @Column()
  public userId: string;
}
