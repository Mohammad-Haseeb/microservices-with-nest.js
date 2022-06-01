import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class address_book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  zip_code: string;

  @Column()
  address1: string;

  @Column()
  type: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deleted_at: Date;
}
