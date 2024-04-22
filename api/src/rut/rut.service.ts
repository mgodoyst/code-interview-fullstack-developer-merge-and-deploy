import { Injectable } from '@nestjs/common';
import { ValidateRutDto } from './dto/validate-rut.dto';
import * as request from 'supertest';

@Injectable()
export class RutService {

    validate(dto: ValidateRutDto): ValidateRutDto {

        const multipliers: number[] = [2, 3, 4, 5, 6, 7];

        const reverseRut = dto.rut.split("").reverse()

        let indexM = 0

        let calculationResult: number | undefined = 0

        reverseRut.forEach(str => {

            const number: number = parseInt(str);

            calculationResult += number * multipliers[indexM]

            if (multipliers.length - 1 == indexM)
                indexM = 0
            else indexM += 1
        })

        calculationResult = 11 - (calculationResult % 11)

        if (dto.validatorDigit == "K")
            dto.validatorDigit = "10"
        else if (dto.validatorDigit == "0")
            dto.validatorDigit = "11"

        dto.result = parseInt(dto.validatorDigit) == calculationResult

        return dto;
    }
}
