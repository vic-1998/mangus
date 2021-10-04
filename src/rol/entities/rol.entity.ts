import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'text', nullable: false })
  description: string;
}
