import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { PlaceDTO } from '../../../Model/Place';
import { PlaceService } from './place.service';

@Controller('/places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {

  }

  @Get()
  getAll(): any {
    return this.placeService.findAll()
  }

  @Get('/:id')
  get(@Param() params): any {
    return this.placeService.findOne(params.id);
  }

  @Post()
  create(@Body() dto: PlaceDTO): Promise<PlaceDTO> {
    return this.placeService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: PlaceDTO): any {
    return this.placeService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id:string){
    return this.placeService.remove(id);
  }
}
