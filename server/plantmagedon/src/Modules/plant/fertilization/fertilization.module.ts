import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fertilization } from '../../../Entities/fertilization.entity';
import { FertilizationController } from './fertilization.controller';
import { FertilizationConverter } from '../converters/fertilization.converter';
import { FertilizationService } from './fertilization.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fertilization])],
  controllers: [FertilizationController],
  providers: [FertilizationService, FertilizationConverter]
})
export class FertilizationModule {

}
