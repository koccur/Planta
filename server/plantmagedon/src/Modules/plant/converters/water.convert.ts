import { Injectable } from '@nestjs/common';
import { Water } from '../../../Entities/water.entity';
import { WaterDTO } from '../../../Model/Water';
import { SprayConverter } from './spray.converter';

@Injectable()
export class WaterConvert {

  constructor(private readonly sprayConverter:SprayConverter) {
  }
  toDto(water: Water): WaterDTO {

    return {
      id: water.id,
      spray: water.spray?this.sprayConverter.toDto(water.spray):null,
      frequency: water.frequency,
      intensity: water.intensity,
      lastActivity: water.lastActivity
    }
  }

  toEntity(dto: WaterDTO): Water {
    return {
      id: dto.id,
      spray: dto.spray?this.sprayConverter.toEntity(dto.spray):null,
      lastActivity: dto.lastActivity,
      intensity: dto.intensity,
      frequency: dto.frequency
    }
  }

}
