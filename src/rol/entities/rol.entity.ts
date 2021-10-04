import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * role entity, this is the reprensentation of the table
 *  in the database, with its respective fields
 */

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'text', nullable: false })
  description!: string;
  static id: number;
}
