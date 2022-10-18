/* eslint-disable max-lines */
/* eslint-disable id-blacklist */
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GEOMETRY, SUBSCRIPTION_TYPE } from '../constants';
import { Utils } from './utils';

describe('Utils test', () => {
  it('Should join only non empty strings', () => {
    expect(Utils.join(['a', '', 'b', ' ', 'c', 'd'], ', ')).toEqual(
      'a, b, c, d'
    );
  });

  it('Should return item as is if only one provided', () => {
    expect(Utils.join(['aaa'], '.')).toEqual('aaa');
  });

  it('Should remove whitespace from both ends of each string', () => {
    expect(Utils.join([' 1 ', '   2', '3 '], ' ')).toEqual('1 2 3');
  });

  it('Should remove null and undefined', () => {
    expect(Utils.join([null, '1', undefined, '2', ' '], '/')).toEqual('1/2');
  });

  [
    { value: 1, expected: '1' },
    { value: 11, expected: '11' },
    { value: 111, expected: '111' },
    { value: 1111, expected: '1,111' },
    { value: 11111, expected: '11,111' },
    { value: 111111, expected: '111,111' },
    { value: 1111111, expected: '1,111,111' },
    { value: 1111111.1, expected: '1,111,111.1' },
    { value: 0, expected: '0' },
    { value: '0', expected: '0' },
    { value: undefined, expected: '0' },
    { value: null, expected: '0' },
    { value: '1', expected: '1' },
    { value: '1111', expected: '1,111' },
    { value: '1111.0', expected: '1,111' },
    { value: '1111.123', expected: '1,111.123' },
    { value: '1111.1239', expected: '1,111.124' },
  ].forEach(({ value, expected }) => {
    it(`Should format ${value} to ${expected}`, () => {
      expect(Utils.formatNumber(value)).toEqual(expected);
    });
  });

  [
    { value: 1, expected: 1 },
    { value: 1.1, expected: 1.1 },
    { value: 1.11, expected: 1.11 },
    { value: 111.111, expected: 111.11 },
  ].forEach(({ value, expected }) => {
    it(`Should format ${value} to ${expected} with default decimalPlaces = 2`, () => {
      expect(Utils.formatDecimal(value)).toEqual(expected);
    });
  });

  [
    { value: 1, decimalPlaces: 1, expected: 1 },
    { value: 1.1, decimalPlaces: 1, expected: 1.1 },
    { value: 1.11, decimalPlaces: 1, expected: 1.1 },
    { value: 111.111, decimalPlaces: 1, expected: 111.1 },
    { value: 111.111, decimalPlaces: 3, expected: 111.111 },
  ].forEach(({ value, decimalPlaces, expected }) => {
    it(`Should format ${value} to ${expected} with specific decimalPlaces = ${decimalPlaces}`, () => {
      expect(Utils.formatDecimal(value, decimalPlaces)).toEqual(expected);
    });
  });

  [
    {
      object: { a: 1, b: '2', c: false },
      base: { a: 1, b: '2', c: false },
      result: {},
    },
    {
      object: null,
      base: { a: 1, b: '2', c: false },
      result: { a: true, b: true, c: true },
    },
    {
      object: {},
      base: { a: 1, b: '2', c: false },
      result: { a: true, b: true, c: true },
    },
    {
      object: { a: 1, b: '2', c: false },
      base: null,
      result: { a: true, b: true, c: true },
    },
    {
      object: { a: 1, b: '2', c: false },
      base: {},
      result: { a: true, b: true, c: true },
    },
    {
      object: { a: '1', b: 2, c: [] },
      base: { a: 1, b: '2', c: false },
      result: { a: true, b: true, c: true },
    },
    {
      object: { a: 'a', b: 'b', c: 'c' },
      base: { q: 'q', w: 'w', e: 'e' },
      result: { a: true, b: true, c: true, q: true, w: true, e: true },
    },
    {
      object: { a: 'a', b: 1 },
      base: { q: 'q', b: 1 },
      result: { a: true, q: true },
    },
    {
      object: { a: 'a', b: 2 },
      base: { q: 'q', b: 1 },
      result: { a: true, q: true, b: true },
    },
  ].forEach(({ object, base, result }) => {
    it(`Diff should return ${JSON.stringify(result)} for ${JSON.stringify(
      object
    )} and ${JSON.stringify(base)}`, () => {
      expect(Utils.diff(object, base)).toEqual(result);
    });
  });

  [
    { value: 'true', expected: true },
    { value: 'True', expected: true },
    { value: true, expected: true },
    { value: 'false', expected: false },
    { value: 'False', expected: false },
    { value: false, expected: false },
  ].forEach(({ value, expected }) => {
    it(`Should parse ${value} to bool: ${expected}`, () => {
      expect(Utils.parseBoolean(value)).toEqual(expected);
    });
  });

  [
    { value: '1', expected: 1 },
    { value: '1.2', expected: 1.2 },
    { value: '-5', expected: -5 },
    { value: '-5.005', expected: -5.005 },
  ].forEach(({ value, expected }) => {
    it(`Should parse ${value} to number: ${expected}`, () => {
      expect(Utils.parseNumber(value)).toEqual(expected);
    });
  });
  [
    {
      form: {
        password: new FormControl('', Validators.required),
      },
      errors: ['required'],
      expected: true,
    },
    {
      form: {
        password: new FormControl('123', Validators.required),
      },
      errors: ['required'],
      expected: false,
    },
    {
      form: {
        password: new FormControl('123', Validators.required),
        email: new FormControl('', Validators.required),
      },
      errors: ['required'],
      expected: true,
    },
    {
      form: {
        password: new FormControl('123', Validators.required),
        email: new FormControl('ads', Validators.email),
      },
      errors: ['email'],
      expected: true,
    },
    {
      form: {
        password: new FormControl('', Validators.required),
        email: new FormControl('wrong email', Validators.email),
      },
      errors: ['required', 'email'],
      expected: true,
    },
    {
      form: {
        password: new FormControl('', Validators.required),
        email: new FormControl('wrong email', Validators.email),
        number: new FormControl(5, Validators.max(3)),
      },
      errors: ['required', 'email'],
      expected: true,
    },
    {
      form: {
        password: new FormControl('', Validators.required),
        group: new FormGroup({
          nestedInput: new FormControl('test wrong email', Validators.email),
        }),
      },
      errors: ['email'],
      expected: true,
    },
  ].forEach(({ form, errors, expected }) => {
    it(`Should correctly detect "${JSON.stringify(errors)}" validation errors ${
      expected ? 'exists' : 'does not exist'
    }`, () => {
      const formGroup = new FormGroup({
        ...form,
      });
      expect(Utils.hasErrors(formGroup, ...errors)).toEqual(expected);
    });
  });

  [
    { timeSpent: 10, progress: 1, total: 3, expectedSec: 20, expectedMin: 0 },
    { timeSpent: 10, progress: 1, total: 5, expectedSec: 40, expectedMin: 0 },
    { timeSpent: 10, progress: 2, total: 100, expectedSec: 0, expectedMin: 8 },
    { timeSpent: 1, progress: 1, total: 61, expectedSec: 60, expectedMin: 0 },
    { timeSpent: 1, progress: 1, total: 60, expectedSec: 59, expectedMin: 0 },
    { timeSpent: 1, progress: 1, total: 65, expectedSec: 0, expectedMin: 1 },
    { timeSpent: 12, progress: 16, total: 88, expectedSec: 54, expectedMin: 0 },
    { timeSpent: 22, progress: 16, total: 88, expectedSec: 0, expectedMin: 2 },
  ].forEach(({ timeSpent, progress, total, expectedSec, expectedMin }) => {
    it(`getRemainingTime should return ${expectedSec} sec and ${expectedMin} minutes
            when ${timeSpent} sec spent for ${progress} of ${total} items`, () => {
      expect(Utils.getRemainingTime(timeSpent * 1000, progress, total)).toEqual(
        { seconds: expectedSec, minutes: expectedMin }
      );
    });
  });
});
