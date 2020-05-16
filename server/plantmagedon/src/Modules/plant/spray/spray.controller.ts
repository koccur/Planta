import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { SprayDTO } from '../../../Model/Spray';
import { SprayService } from './spray.service';

@Controller('/sprays')
export class SprayController {

  constructor(private readonly sprayService: SprayService) {
  }

  @Get()
  getAll(): any {
    return this.sprayService.findAll();
  }

  @Get('/:id')
  get(@Param() params): Promise<SprayDTO> {
    return this.sprayService.findOne(params.id);
  }

  @Post()
  create(@Body() dto: SprayDTO): Promise<SprayDTO> {
    return this.sprayService.create(dto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() dto: SprayDTO): Promise<UpdateResult> {
    return this.sprayService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.sprayService.remove(id);
  }

}
