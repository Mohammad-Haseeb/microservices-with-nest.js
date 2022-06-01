import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class user_roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  type: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;
}
