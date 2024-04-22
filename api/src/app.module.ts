import { Module } from '@nestjs/common';
import { RutModule } from './rut/rut.module';

@Module({
  imports: [RutModule]
})
export class AppModule { }
