import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'environment/config';
import { ConvertersModule } from './Modules/plant/converters/converters.module';
import { FertilizationModule } from './Modules/plant/fertilization/fertilization.module';
import { PlaceModule } from './Modules/plant/place/place.module';
import { PlantModule } from './Modules/plant/plant.module';
import { SprayModule } from './Modules/plant/spray/spray.module';
import { WaterModule } from './Modules/plant/water/water.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.pasword,
      database: databaseConfig.databaseName,
      autoLoadEntities:true,
      synchronize: true,
    }),
    WaterModule,
    PlaceModule,
    ConvertersModule,
    SprayModule,
    FertilizationModule,
    PlantModule
  ]
})
export class AppModule {}
