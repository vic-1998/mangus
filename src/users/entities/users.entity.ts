import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './../../rol/entities';

/**
 * role users, this is the reprensentation of the table
 *  in the database, with its respective fields
 */

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  username!: string;
  @Column()
  password!: string;
  @ManyToOne(() => Rol, (rolid: Rol) => rolid.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column()
  role_id: number;
  @Column({ name: 'created_at', type: 'timestamp', nullable: true })
  createdat: Date;
}
