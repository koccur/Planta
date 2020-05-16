import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Water } from '../../../Entities/water.entity';
import { SprayConverter } from '../converters/spray.converter';
import { WaterController } from './water.controller';
import { WaterConvert } from '../converters/water.convert';
import { WaterService } from './water.service';

@Module({
  imports: [TypeOrmModule.forFeature([Water])],
  controllers: [WaterController],
  providers: [WaterService, WaterConvert,SprayConverter]
})
export class WaterModule {

}
