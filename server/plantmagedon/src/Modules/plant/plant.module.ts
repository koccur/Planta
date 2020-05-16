import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from '../../Entities/plant.entity';
import { ConvertersModule } from './converters/converters.module';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant]),ConvertersModule],
  controllers: [PlantController],
  providers: [PlantService]
})
export class PlantModule {

}
