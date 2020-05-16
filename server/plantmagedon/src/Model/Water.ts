import { SprayDTO } from './Spray';

export interface WaterDTO {
  id?:number;
  frequency: number;
  intensity: number;
  lastActivity: Date;
  spray?:SprayDTO
}
