import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from '../../../Entities/place.entity';
import { PlaceController } from './place.controller';
import { PlaceConverter } from '../converters/place.converter';
import { PlaceService } from './place.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  controllers: [PlaceController],
  providers: [PlaceService,PlaceConverter]
})
export class PlaceModule {

}
