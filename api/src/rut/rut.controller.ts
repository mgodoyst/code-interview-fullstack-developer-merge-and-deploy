import { Body, Controller, Get, Post } from '@nestjs/common';
import { ValidateRutDto } from './dto/validate-rut.dto';
import { RutService } from './rut.service';
import { get } from 'http';

@Controller('rut')
export class RutController {

    constructor(private rutService: RutService) {

    }

    @Get("/test")
    get() {
        return "test"
    }

    @Post("/validate")
    validate(@Body() dto: ValidateRutDto) {
        return this.rutService.validate(dto)
    }
}
