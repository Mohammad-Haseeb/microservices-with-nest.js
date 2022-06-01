import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
enum ExpiredEnum {
  unchecked,
  checked,
}

@Entity()
export class code_varification {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  purpose: string;

  @Column()
  is_expired: ExpiredEnum;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  expires_at: Date;
}
