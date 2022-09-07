import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const clienteAddSecValidator: ValidatorFn = (controlSec: AbstractControl): ValidationErrors | null => {
  const codiceInterscambio = controlSec.get('codiceInterscambio');
  const pec = controlSec.get('pec');

  return codiceInterscambio && pec && !codiceInterscambio.value && !pec.value ? { clienteA: true } : null;
};

  @Directive({
    selector: '[appclienteAddSec]',
    providers: [{ provide: NG_VALIDATORS, useExisting: clienteAddSecValidatorDirective, multi: true }]
  })
  export class clienteAddSecValidatorDirective implements Validator {
    validate(controlSec: AbstractControl): ValidationErrors | null {
      return clienteAddSecValidator(controlSec);
    }
  }
  
  