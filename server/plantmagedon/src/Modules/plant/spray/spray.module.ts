import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spray } from '../../../Entities/spray.entity';
import { ConvertersModule } from '../converters/converters.module';
import { SprayController } from './spray.controller';
import { SprayService } from './spray.service';

@Module({
  imports: [TypeOrmModule.forFeature([Spray]),ConvertersModule],
  controllers: [SprayController],
  providers: [SprayService]
})
export class SprayModule {

}
