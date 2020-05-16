import { Injectable } from '@nestjs/common';
import { Place } from '../../../Entities/place.entity';
import { PlaceDTO } from '../../../Model/Place';

export class PlaceConverter {

  toDto(place: Place): PlaceDTO {
    return {
      id: place.id,
      roomName: place.roomName,
      sunnyLevel: place.sunnyLevel
    }
  }

  toEntity(dto: PlaceDTO): Place {
    return {
      id: dto.id,
      sunnyLevel: dto.sunnyLevel,
      roomName: dto.roomName
    }
  }
}
