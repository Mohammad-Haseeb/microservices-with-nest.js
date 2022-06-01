import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

enum isRead {
  no,
  yes,
}

@Entity()
export class my_notifications {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  is_read: isRead;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
