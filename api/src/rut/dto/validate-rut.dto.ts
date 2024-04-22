import { IsNotEmpty, IsNumberString, Length, Matches, MaxLength, maxLength, MinLength } from "class-validator"

export class ValidateRutDto {
    @IsNotEmpty({ message: "El número rut es obligatorio" })
    @IsNumberString(undefined, { message: "El número rut tiene un formato inválido" })
    @MinLength(7, { message: "El número rut debe tener mínimo 7 caracteres" })
    @MaxLength(8, { message: "El número rut debe tener máximo 8 caracteres" })
    rut!: string
    result?: boolean
    @Length(1, 1, { message: "El dígito validador debe estar conformado por 1 carácter" })
    @Matches(/^[\dKk]$/, { message: "El dígito validador tiene un formato inválido" })
    validatorDigit!: string
}
