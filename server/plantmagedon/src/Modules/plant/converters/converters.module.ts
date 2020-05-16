import { Global, Module } from '@nestjs/common';
import { FertilizationConverter } from './fertilization.converter';
import { PlaceConverter } from './place.converter';
import { PlantConverter } from './plant.converter';
import { SprayConverter } from './spray.converter';
import { WaterConvert } from './water.convert';

@Module({
  controllers: [],
  providers: [SprayConverter, WaterConvert, FertilizationConverter, PlaceConverter,PlantConverter],
  exports: [SprayConverter, WaterConvert, FertilizationConverter, PlaceConverter,PlantConverter]
})
export class ConvertersModule {
}
