import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  address: string;
  @Column()
  phone: number;
}
