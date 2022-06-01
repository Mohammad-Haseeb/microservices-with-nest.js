import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

enum isDeletedEnum {
  false,
  true,
}

@Entity()
export class preferences {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  is_deleted: isDeletedEnum;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
