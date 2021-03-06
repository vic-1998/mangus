import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * role client, this is the reprensentation of the table
 *  in the database, with its respective fields
 * */

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  user_id: number;
  @Column()
  name!: string;
  @Column()
  lastname!: string;
  @Column()
  address!: string;
  @Column()
  phone!: number;
}
