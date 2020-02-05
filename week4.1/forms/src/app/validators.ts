import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(c: AbstractControl): ValidationErrors | null {
  return c.value.password === c.value.repeatPassword ? null : { passwordMatch: true };
}
