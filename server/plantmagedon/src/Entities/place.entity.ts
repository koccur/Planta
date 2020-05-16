import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  sunnyLevel: number;

  @Column({nullable:true})
  roomName: string;

}
