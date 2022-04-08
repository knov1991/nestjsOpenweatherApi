import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TempoController } from './tempo.controller';
import { TempoService } from './tempo.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 1000,
    }),
  ],
  controllers: [TempoController],
  providers: [TempoService],
})
export class TempoModule {}
