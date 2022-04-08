import { Controller, Get, Param } from '@nestjs/common';
import { TempoService } from './tempo.service';

@Controller('tempo')
export class TempoController {
  constructor(private tempoService: TempoService) {}

  @Get(':cidade')
  getTempo(@Param() params) {
    return this.tempoService.getTempo(params);
  }
}
