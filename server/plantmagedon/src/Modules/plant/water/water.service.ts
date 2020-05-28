import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Water } from '../../../Entities/water.entity';
import { WaterDTO } from '../../../Model/Water';
import { WaterConvert } from '../converters/water.convert';

@Injectable()
export class WaterService {
  constructor(@InjectRepository(Water)
              private readonly waterRepository: Repository<Water>,
              private readonly waterConvert:WaterConvert) {
  }

  findAll(): Promise<WaterDTO[]> {
    return this.waterRepository.find();
  }

  async findOne(id: string): Promise<WaterDTO> {
    return this.waterRepository.findOne(id);
  }

  findOneWithSprayInfo(id: string):Promise<WaterDTO>{
    return this.waterRepository.createQueryBuilder("water")
    .innerJoinAndSelect("water.spray","spray").where({id}).getOne();
  }

  findAllWithSprayInfo():Promise<WaterDTO[]>{
    return this.waterRepository.createQueryBuilder("water").innerJoinAndSelect("water.spray","spray").getMany();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.waterRepository.delete(id);
  }

  async create(dto: WaterDTO): Promise<WaterDTO> {
    const entity = this.waterConvert.toEntity(dto);
    return this.waterConvert.toDto(await this.waterRepository.save(entity));
  }

  update(id: string, dto: WaterDTO): Promise<UpdateResult> {
    const entity = this.waterConvert.toEntity(dto);
    return this.waterRepository.update(id, entity);
  }
}
