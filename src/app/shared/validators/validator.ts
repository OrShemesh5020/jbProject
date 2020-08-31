import { ValidatorFn, AbstractControl } from '@angular/forms';
export class URLValidator {
  public static prefix(): ValidatorFn {
    const validUrlPrefixRegExp: RegExp = /^(http|https):\/\//;
    return (control: AbstractControl): { [key: string]: any } | null => {
      const validUrl = validUrlPrefixRegExp.test(control.value);
      return validUrl ? null : { urlPrefix: { value: control.value } };
    };
  }
}
