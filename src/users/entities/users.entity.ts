import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  role_id: number;
  @Column({ name: 'created_at', type: 'timestamp' })
  createdat: Date;
}
