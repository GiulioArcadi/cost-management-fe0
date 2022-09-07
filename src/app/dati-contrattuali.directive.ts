import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const datiContrattualiValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const fine = control.get('Fine');
  const select = control.get('Select');

  return fine && select && !fine.value && !select.value ? { datiContrattuali: true } : null;
};

@Directive({
    selector: '[datiContrattuali]',
    providers: [{ provide: NG_VALIDATORS, useExisting: datiContrattualiValidatorDirective, multi: true }]
  })
  export class datiContrattualiValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return datiContrattualiValidator(control);
    }
  }