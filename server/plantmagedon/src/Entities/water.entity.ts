import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Spray } from './spray.entity';

@Entity()
export class Water {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frequency: number;

  @Column()
  intensity: number;

  @Column({nullable: true})
  lastActivity: Date;

  @OneToOne(type => Spray, {nullable: true, cascade:true})
  @JoinColumn()
  spray: Spray

}
