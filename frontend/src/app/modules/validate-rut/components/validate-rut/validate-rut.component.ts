import { Component } from '@angular/core';
import { ValidateRutService } from '../../../../services/validate-rut.service';
import { ValidateRut } from '../../../../models/validate-rut.model';

@Component({
  selector: 'app-validate-rut',
  templateUrl: './validate-rut.component.html'
})
export class ValidateRutComponent {

  constructor(private validateRutService: ValidateRutService) { }

  rut: string = "sadas"

  validate() {
    const validateRut: ValidateRut = {
      rut: this.rut,
    }

    this.validateRutService.validate(validateRut)
      .subscribe(data => {
        console.log(data.result)
      })
  }

}
