import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

export const validateSelectionList: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  return Object.values(control.value).find(result => !!result) ? null : ({ selectionList: 'No item selected' } as ValidationErrors);
};

@Directive({
  selector: '[coolSelectionListValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectionListValidatorDirective,
      multi: true,
    },
  ],
})
export class SelectionListValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return validateSelectionList(control);
  }
}
