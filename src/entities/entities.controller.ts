import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesDto } from './entities.dto';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  /**
   * @description добавление сущности
   */
  async create(@Body() dto: EntitiesDto) {
    return this.entitiesService.create(dto);
  }
}
