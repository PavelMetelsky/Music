import { Injectable } from '@angular/core';

import { values } from 'lodash';
import { SINGLE_SESSION_STORAGE_KEYS } from './constants';

@Injectable()
export class StorageService {
  private static readonly version = 1;
  private static readonly versionKey = 'storageVersion';

  private static readonly jwtStorageKey = 'JWT';
  private static readonly appStorageKey = 'PianoWebApp';
  private static storage = {};

  private static getUniqueStorageKey(): string {
    return Math.round(Math.random() * 1000).toString();
  }

  private static isLocalStorageAvailable(): boolean {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');

      return true;
    } catch (e) {
      return false;
    }
  }

  constructor() {
    if (StorageService.isLocalStorageAvailable()) {
      StorageService.getGlobalObject = StorageService.getLocalStorageObject;
      StorageService.setGlobalObject = StorageService.setLocalStorageObject;
    }
    this.validateStorage();
  }

  public setWithUniqStorageKey(value: any): string {
    const key = StorageService.getUniqueStorageKey();
    this.setItem(key, value);

    return key;
  }

  public setItem(key: string, value: any): void {
    const obj = StorageService.getGlobalObject();
    obj[key] = value;
    StorageService.setGlobalObject(obj);
  }

  public getItem(key: string): any {
    return StorageService.getGlobalObject()[key];
  }

  public get<T>(key: string): T {
    return this.getItem(key) as T;
  }

  public removeItem(key: string): void {
    const obj = StorageService.getGlobalObject();
    if (obj != null) {
      delete obj[key];
    }
    StorageService.setGlobalObject(obj);
  }

  public getJwt(): JWT {
    return this.get<JWT>(StorageService.jwtStorageKey);
  }

  public setJwt(jwt: JWT): void {
    this.setItem(StorageService.jwtStorageKey, jwt);
  }

  public removeJwt(): void {
    this.removeItem(StorageService.jwtStorageKey);
  }

  public clearTempStorage(): void {
    const obj = StorageService.getGlobalObject();
    values(SINGLE_SESSION_STORAGE_KEYS).forEach((key) => {
      if (Array.isArray(key)) {
        key.forEach((k) => delete obj[k]);
      } else {
        delete obj[key];
      }
    });
    StorageService.setGlobalObject(obj);
  }

  private static getGlobalObject(): any {
    return StorageService.getMemoryObject();
  }

  private static setGlobalObject(value: any): void {
    StorageService.setMemoryObject(value);
  }

  private static getLocalStorageObject(): any {
    const rawObj = localStorage.getItem(StorageService.appStorageKey);

    return rawObj !== 'undefined' && rawObj != null ? JSON.parse(rawObj) : {};
  }

  private static setLocalStorageObject(value: any): void {
    localStorage.setItem(
      StorageService.appStorageKey,
      JSON.stringify(value || {})
    );
  }

  private static getMemoryObject(): any {
    return StorageService.storage;
  }

  private static setMemoryObject(value: any): any {
    StorageService.storage = value;
  }

  private validateStorage(): void {
    if (
      this.get<number>(StorageService.versionKey) !== StorageService.version
    ) {
      this.clearTempStorage();
    }
    this.setItem(StorageService.versionKey, StorageService.version);
  }
}
