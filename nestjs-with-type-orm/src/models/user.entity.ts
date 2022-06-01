import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { user_roles } from './user_roles.entity';
enum termsEnum {
  unchecked,
  checked,
}
enum activeEnum {
  inactive,
  active,
}
enum approvedEnum {
  notapproved,
  approved,
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  first_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column('int')
  terms: termsEnum;

  @Column('int')
  active: activeEnum;

  @Column('int')
  approved: approvedEnum;

  @Column()
  registered_via: string;

  @ManyToOne((type) => user_roles, {
    createForeignKeyConstraints: false,
  })
  role_id: user_roles;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
