import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Fertilization } from './fertilization.entity';
import { Place } from './place.entity';
import { Water } from './water.entity';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable:true})
  picture: string;

  @OneToOne(type => Water,{cascade:true})
  @JoinColumn()
  water: Water;

  @OneToOne(type => Fertilization,{cascade:true})
  @JoinColumn()
  fertilization: Fertilization;

  @OneToOne(type => Place,{cascade:true})
  @JoinColumn()
  place: Place;

  @Column({nullable:true})
  notes: string;

}
