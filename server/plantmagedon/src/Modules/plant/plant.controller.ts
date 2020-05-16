import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { PlantDTO } from '../../Model/Plant';
import { PlantService } from './plant.service';

@Controller('/plants')
export class PlantController {

  constructor(private plantService: PlantService) {
  }

  @Get()
  getAll(): any {
    return this.plantService.findAll()
  }

  @Get('/:id')
  get(@Param() params): any {
    return this.plantService.findOne(params.id);
  }

  @Post()
  create(@Body() plantDTO: PlantDTO): any {
    return this.plantService.create(plantDTO);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() plantDTO: PlantDTO): any {
    return this.plantService.update(id,plantDTO);
  }
  @Delete('/:id')
  delete(@Param('id') id:string){
    return this.plantService.remove(id);
  }

}
