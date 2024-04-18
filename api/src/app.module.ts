import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutModule } from './rut/rut.module';

@Module({
  imports: [RutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
