import { Injectable } from '@nestjs/common';
import { Fertilization } from '../../../Entities/fertilization.entity';
import { FertilizationDTO } from '../../../Model/Fertilization';

@Injectable()
export class FertilizationConverter {

  toDto(fertilization: Fertilization): FertilizationDTO {
    return {
      id: fertilization.id,
      frequency: fertilization.frequency,
      intensity: fertilization.intensity,
      lastActivity: fertilization.lastActivity
    }
  }

  toEntity(dto: FertilizationDTO): Fertilization {
    return {
      id: dto.id,
        lastActivity: dto.lastActivity,
        intensity: dto.intensity,
        frequency: dto.frequency
    }
  }

}
