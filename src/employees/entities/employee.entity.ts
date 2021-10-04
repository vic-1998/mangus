import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * employee entity, this is the reprensentation of the table
 *  in the database, with its respective fields
 */

@Entity('employee')
export class Employee {
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
