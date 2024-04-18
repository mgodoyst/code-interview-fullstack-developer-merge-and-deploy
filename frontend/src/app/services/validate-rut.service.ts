import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValidateRut } from '../models/validate-rut.model';

@Injectable({
  providedIn: 'root'
})
export class ValidateRutService {

  constructor(private http: HttpClient) { }

  validate(validateRut: ValidateRut) {
    return this.http.post<ValidateRut>('http://localhost:3000/rut/validate', validateRut)
  }
}
