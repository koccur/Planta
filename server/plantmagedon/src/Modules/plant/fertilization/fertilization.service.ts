import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Fertilization } from '../../../Entities/fertilization.entity';
import { FertilizationDTO } from '../../../Model/Fertilization';
import { FertilizationConverter } from '../converters/fertilization.converter';

@Injectable()
export class FertilizationService {
  constructor(@InjectRepository(Fertilization)
              private readonly fertilizationRepository: Repository<Fertilization>,
              private readonly fertilizationConverter:FertilizationConverter) {
  }

  findAll(): Promise<Fertilization[]> {
    return this.fertilizationRepository.find();
  }

  findOne(id: number): Promise<Fertilization> {
    return this.fertilizationRepository.findOne(id)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.fertilizationRepository.delete(id);
  }

  async create(dto: FertilizationDTO): Promise<FertilizationDTO> {
    const entity = this.fertilizationConverter.toEntity(dto);

    return this.fertilizationConverter.toDto(await this.fertilizationRepository.save(entity));
  }

  update(id: string, dto: FertilizationDTO): Promise<UpdateResult> {
    const entity = this.fertilizationConverter.toEntity(dto);
    return this.fertilizationRepository.update(id, entity)
  }
}
