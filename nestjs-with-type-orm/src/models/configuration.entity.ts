import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class configurations {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;
}
