import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class sold_listings {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;
}
