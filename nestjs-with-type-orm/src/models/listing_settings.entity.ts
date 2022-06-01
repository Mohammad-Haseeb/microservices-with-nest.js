import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class listing_setting {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  value: string;

  @Column({ type: 'bigint' })
  key: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;
}
