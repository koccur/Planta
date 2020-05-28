import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Plant } from '../../Entities/plant.entity';
import { PlantDTO } from '../../Model/Plant';
import { PlantConverter } from './converters/plant.converter';

@Injectable()
export class PlantService {
  constructor(@InjectRepository(Plant)
              private readonly plantRepository: Repository<Plant>,
              private readonly plantConverter: PlantConverter) {
  }

  findAll(): Promise<Plant[]> {
    return this.plantRepository.find();
  }

  findOne(id: string): Promise<Plant> {
    return this.plantRepository.findOne(id)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.plantRepository.delete(id);
  }

  async create(dto: PlantDTO): Promise<PlantDTO> {
    const entity = this.plantConverter.toEntity(dto)

    return this.plantConverter.toDto(await this.plantRepository.save(entity));
  }

  update(id: string, dto: PlantDTO): any {
    const entity = this.plantConverter.toEntity(dto)
    return this.plantRepository.update(id, entity)
  }

  findAllWithInfo(): Promise<Plant[]> {
    return this.plantRepository.createQueryBuilder("plant")
      .innerJoinAndSelect("plant.water","water")
      .innerJoinAndSelect("plant.place","place")
      .innerJoinAndSelect("plant.fertilization","fertilization")
      .getMany();
  }

  findOneWithInfo(id: string): Promise<Plant> {
    return this.plantRepository.createQueryBuilder("plant")
      .innerJoinAndSelect("plant.water","water")
      .innerJoinAndSelect("plant.place","place")
      .innerJoinAndSelect("plant.fertilization","fertilization")
      .innerJoinAndSelect("water.spray","spray")
      .where({id})
      .getOne();
  }
}
