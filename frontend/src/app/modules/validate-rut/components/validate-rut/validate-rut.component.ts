import { Component } from '@angular/core';
import { ValidateRutService } from '../../../../services/validate-rut.service';
import { ValidateRut } from '../../../../models/validate-rut.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validate-rut',
  templateUrl: './validate-rut.component.html'
})
export class ValidateRutComponent {

  constructor(private validateRutService: ValidateRutService, private toastr: ToastrService) { }

  rut: string = ""
  validatorDigit: string = ""

  validate() {
    const validateRut: ValidateRut = {
      rut: this.rut,
      validatorDigit: this.validatorDigit,
    }

    this.validateRutService.validate(validateRut)
      .subscribe(data => {
        this.toast(data.result ? "Válido" : "Inválido", data.result)
      })
  }

  toast(message: string, isError: boolean = false) {
    if (isError)
      this.toastr.success(message, '', { positionClass: 'toast-bottom-center' });
    else this.toastr.error(message, '', { positionClass: 'toast-bottom-center' })
  }
}
