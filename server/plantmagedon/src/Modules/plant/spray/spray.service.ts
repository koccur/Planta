import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Spray } from '../../../Entities/spray.entity';
import { SprayDTO } from '../../../Model/Spray';
import { SprayConverter } from '../converters/spray.converter';

export class SprayService {
  constructor(@InjectRepository(Spray)
              private readonly sprayRepository:Repository<Spray>,
              private readonly sprayConverter:SprayConverter) {
  }

  findAll(): Promise<SprayDTO[]> {
    return this.sprayRepository.find();
  }

  findOne(id: string): Promise<SprayDTO> {
    return this.sprayRepository.findOne(id)
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.sprayRepository.delete(id);
  }

  async create(dto: SprayDTO): Promise<SprayDTO> {
    const entity = this.sprayConverter.toEntity(dto);
    return this.sprayConverter.toDto( await this.sprayRepository.save(entity));
  }

  update(id: string, dto: SprayDTO): Promise<UpdateResult> {
    return this.sprayRepository.update(id, dto)
  }
}
