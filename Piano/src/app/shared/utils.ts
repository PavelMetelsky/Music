import { FormGroup, NgForm } from '@angular/forms';

import { isEqual, keys, some, transform } from 'lodash';

import { environment } from '../../environments/environment';

export class Utils {
  public static diff<T>(object1, object2): T {
    return {
      ...Utils.diffWithBase(object1, object2),
      ...Utils.diffWithBase(object2, object1),
    } as T;
  }

  private static diffWithBase(obj, base): any {
    const target = base != null ? base : {};

    return transform(obj, (result, value, key) => {
      if (!isEqual(value, target[key])) {
        result[key] = true;
      }
    });
  }
  // combines non empty strings into one using separator
  public static join(pieces: string[], separator = ', '): string {
    return pieces
      .map((s) => s && s.trim())
      .filter(Boolean)
      .join(separator);
  }

  public static formatNumber(value: string | number): string {
    const num = Number(value);

    return (Number.isNaN(num) ? 0 : num).toLocaleString();
  }

  public static formatDecimal(value: number, decimalPlaces = 2): number {
    return Number(value.toFixed(decimalPlaces));
  }

  public static parseBoolean(value: string | boolean): boolean {
    return typeof value === 'string' ? value.toLowerCase() === 'true' : value;
  }

  public static parseNumber(value: string): number {
    return Number(value);
  }

  public static hasErrors = (
    form: NgForm | FormGroup,
    ...errNames: string[]
  ): boolean =>
    some(errNames, (error) =>
      keys(form.controls).some((c) => {
        if ((form.controls[c] as FormGroup).controls != null) {
          return Utils.hasErrors(form.controls[c] as FormGroup, error);
        }

        return form.controls[c].hasError(error);
      })
    );

  public static isApiUrl(url: string): boolean {
    return ['api/', '/userinfo'].some(
      (apiUrl) => url.toLowerCase().indexOf(apiUrl) > -1
    );
  }

  public static stringFilter(query: string, ...toFilter: string[]): boolean {
    if (!query) {
      return true;
    }

    const searchTerms = query.split(' ').filter(Boolean);

    return searchTerms.every((term) =>
      toFilter.some(
        (searchField) =>
          !searchField ||
          searchField.toUpperCase().indexOf(term.toUpperCase()) >= 0
      )
    );
  }

  public static downloadWithDirectLink(link: string): void {
    window.location.href = `${environment.authority}/${link}`;
  }

  public static getRemainingTime(
    timeSpent: number,
    progress: number,
    total: number
  ): { seconds: number; minutes: number } {
    let seconds = Math.round(
      ((timeSpent / progress) * total - timeSpent) / 1000
    );
    const minutesRaw = seconds / 60;
    const minutes = minutesRaw > 1 ? Math.round(minutesRaw) : 0;
    seconds = minutesRaw <= 1 ? seconds : 0;

    return { seconds, minutes };
  }

  private static getUplift(current: number, previous: number): number {
    const result = Math.round(((current - previous) / previous) * 1000) / 10;

    return result;
  }
}
