import { Module } from '@nestjs/common';
import { RutController } from './rut.controller';
import { RutService } from './rut.service';

@Module({
  controllers: [RutController],
  providers: [RutService]
})
export class RutModule {}
