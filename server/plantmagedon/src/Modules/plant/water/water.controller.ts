import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { WaterDTO } from '../../../Model/Water';
import { WaterService } from './water.service';

@Controller('/waters')
export class WaterController {

  constructor(private readonly waterService: WaterService) {
  }

  @Get()
  getAll():Promise<WaterDTO[]>{
    return this.waterService.findAll();
  }

  @Get('/withSpray/all')
  getAllWithSpray():Promise<WaterDTO[]>{
    return this.waterService.findAllWithSprayInfo();
  }

  @Get('/:id')
  get(@Param() params): Promise<WaterDTO> {
    return this.waterService.findOne(params.id);
  }

  @Get('/withSpray/:id')
  getWithSpray(@Param() params): Promise<WaterDTO>{
    return this.waterService.findOneWithSprayInfo(params.id);
  }

  @Post()
  create(@Body() dto: WaterDTO): Promise<WaterDTO> {
    return this.waterService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: WaterDTO): Promise<UpdateResult> {
    return this.waterService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.waterService.remove(id);
  }

}
