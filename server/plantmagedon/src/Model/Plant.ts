import { FertilizationDTO } from './Fertilization';
import { PlaceDTO } from './Place';
import { WaterDTO } from './Water';

export interface PlantDTO {
  id?:number
  name:string;
  picture?:string;
  water?:WaterDTO;
  fertilization?:FertilizationDTO;
  place?:PlaceDTO;
  notes?:string;
}
