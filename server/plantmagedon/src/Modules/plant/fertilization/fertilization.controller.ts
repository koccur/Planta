import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { FertilizationDTO } from '../../../Model/Fertilization';
import { FertilizationService } from './fertilization.service';

@Controller('/fertilizations')
export class FertilizationController {
  constructor(private readonly fertilizationService: FertilizationService) {

  }

  @Get()
  getAll(): any {
    return this.fertilizationService.findAll()
  }

  @Get('/:id')
  get(@Param() params): any {
    return this.fertilizationService.findOne(params.id);
  }

  @Post()
  create(@Body() dto: FertilizationDTO): Promise<FertilizationDTO> {
    return this.fertilizationService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: FertilizationDTO): any {
    return this.fertilizationService.update(id, dto);
  }
  @Delete('/:id')
  delete(@Param('id') id:string){
    return this.fertilizationService.remove(id);
  }
}
