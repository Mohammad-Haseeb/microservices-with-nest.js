import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class retailers {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
