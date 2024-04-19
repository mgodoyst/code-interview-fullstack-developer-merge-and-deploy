import { Component } from '@angular/core';
import { ValidateRutService } from '../../../../services/validate-rut.service';
import { ValidateRut } from '../../../../models/validate-rut.model';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-rut',
  templateUrl: './validate-rut.component.html'
})
export class ValidateRutComponent {

  constructor(private validateRutService: ValidateRutService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
    this.initForm()
  }

  rut: string = ""
  validatorDigit: string = ""
  form!: FormGroup;

  initForm() {
    this.form = this.fb.group({
      rut: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      validatorDigit: ["", [Validators.required, Validators.maxLength(1)]]
    })
    this.subscribeToFieldChanges()
  }

  validate() {
    if (this.form.invalid) return;

    const validateRut: ValidateRut = this.form.value

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

  get rutField() {
    return this.form.get("rut")
  }

  get validatorDigitField() {
    return this.form.get("validatorDigit")
  }

  subscribeToFieldChanges() {
    this.rutField?.valueChanges.subscribe((value: string) =>
      this.rutField?.patchValue(value.replace(/\D/g, '')))

    this.validatorDigitField?.valueChanges.subscribe((value: string) =>
      this.validatorDigitField?.patchValue(value.replace(/[^0-9kK]/g, '')));
  }
}
