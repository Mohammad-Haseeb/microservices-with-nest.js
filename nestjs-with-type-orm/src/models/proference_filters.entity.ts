import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class proference_filters {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  type: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
