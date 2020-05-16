import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fertilization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frequency: number;

  @Column()
  intensity: number;

  @Column({nullable:true})
  lastActivity: Date;

}
