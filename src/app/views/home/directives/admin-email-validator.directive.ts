import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

export const adminDomainValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const role = control.get('role');
  const email = control.get('email');

  return role && email && role.value === 'Administrator' && !email.value.includes('@metafinanz.de')
    ? { specialAdmin: true }
    : null;
};

@Directive({
  selector: '[coolAdminEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AdminEmailValidatorDirective,
      multi: true,
    },
  ],
})
export class AdminEmailValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return adminDomainValidator(control);
  }
}
