import { Body, Controller, Get, Post } from '@nestjs/common';
import { ValidateRutDto } from './dto/validate-rut.dto';
import { RutService } from './rut.service';

@Controller('api')
export class RutController {

    constructor(private rutService: RutService) {
    }

    @Post("/validation")
    validate(@Body() dto: ValidateRutDto) {
        return this.rutService.validate(dto)
    }
}
