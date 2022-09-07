import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const clienteAddValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const partitaIva = control.get('partitaIva');
  const codiceFiscale = control.get('codiceFiscale');

  return partitaIva && codiceFiscale && !partitaIva.value && !codiceFiscale.value ? { clienteAdd: true } : null;
};

@Directive({
    selector: '[appclienteAdd]',
    providers: [{ provide: NG_VALIDATORS, useExisting: clienteAddValidatorDirective, multi: true }]
  })
  export class clienteAddValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return clienteAddValidator(control);
    }
  }
  
  