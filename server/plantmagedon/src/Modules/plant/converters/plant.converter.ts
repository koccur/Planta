import { Injectable } from '@nestjs/common';
import { Plant } from '../../../Entities/plant.entity';
import { PlantDTO } from '../../../Model/Plant';
import { FertilizationConverter } from './fertilization.converter';
import { PlaceConverter } from './place.converter';
import { WaterConvert } from './water.convert';

@Injectable()
export class PlantConverter {
  constructor(private readonly waterConvert: WaterConvert,
              private readonly fertilizationConverter: FertilizationConverter,
              private readonly placeConverter: PlaceConverter) {
  }

  toDto(plant: Plant): PlantDTO {
    return {
      id: plant.id,
      fertilization: this.fertilizationConverter.toDto(plant.fertilization),
      picture: plant.picture,
      name: plant.name,
      notes: plant.notes,
      place: this.placeConverter.toDto(plant.place),
      water: this.waterConvert.toDto(plant.water)
    }
  }

  toEntity(dto: PlantDTO): Plant {

    return {
      notes: dto.notes,
      place: this.placeConverter.toEntity(dto.place),
      water: this.waterConvert.toEntity(dto.water),
      picture: dto.picture,
      fertilization: this.fertilizationConverter.toEntity(dto.fertilization),
      name: dto.name,
      id: dto.id
    }

  }
}
