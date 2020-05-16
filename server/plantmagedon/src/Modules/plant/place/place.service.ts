import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Place } from '../../../Entities/place.entity';
import { PlaceDTO } from '../../../Model/Place';

@Injectable()
export class PlaceService {
  constructor(@InjectRepository(Place)
              private readonly placeRepository: Repository<Place>) {
  }

  findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  findOne(id: number): Promise<Place> {
    return this.placeRepository.findOne(id)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.placeRepository.delete(id);
  }

  create(placeDTO: PlaceDTO): Promise<PlaceDTO> {
    return this.placeRepository.save(placeDTO);
  }

  update(id: string, placeDto: PlaceDTO): any {
    return this.placeRepository.update(id, placeDto)
  }
}
