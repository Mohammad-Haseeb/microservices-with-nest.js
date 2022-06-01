import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class sub_categories {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
