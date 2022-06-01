import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class listing_schedular_data {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  send_to_facebook: string;

  @Column()
  send_to_mailing_list: string;

  @Column()
  sends_left: number;

  @Column()
  is_sent: boolean;

  @Column()
  interval_hours: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  send_date: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  last_send_date: Date;
}
