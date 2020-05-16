import { Global, Injectable } from '@nestjs/common';
import { Spray } from '../../../Entities/spray.entity';
import { SprayDTO } from '../../../Model/Spray';

@Injectable()
export class SprayConverter {
  toDto(spray: Spray): SprayDTO {
    return {
      id: spray.id,
      lastActivity: spray.lastActivity,
      intensity: spray.intensity,
      frequency: spray.frequency
    }
  }

  toEntity(dto: SprayDTO): Spray {

    return {
      frequency: dto.frequency,
      intensity: dto.intensity,
      lastActivity: dto.lastActivity,
      id: dto.id,

    }
  }

}
