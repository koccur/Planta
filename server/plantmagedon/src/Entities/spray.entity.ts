import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spray {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frequency: number;

  @Column()
  intensity: number;

  @Column({nullable: true})
  lastActivity: Date;

}
