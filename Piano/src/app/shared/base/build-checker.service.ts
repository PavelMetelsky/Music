import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const TIMESTAMP_FILE = '/build-timestamp.json';
const FREQUENCY = 1000 * 60 * 30;

@Injectable({
  providedIn: 'root',
})
export class BuildCheckerService {
  private isPageReloadRequired = false;
  private initialTimestamp = null;

  public get needsReload(): boolean {
    return this.isPageReloadRequired;
  }

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.fetchInitialTimestamp();
      setInterval(() => {
        this.checkCurrentTimestamp();
      }, FREQUENCY);
    }
  }

  public schedulePageReload(): void {
    this.isPageReloadRequired = true;
  }

  private fetchInitialTimestamp(): void {
    this.getTimeStamp()
      .then((timestamp) => (this.initialTimestamp = timestamp))
      .catch(() => {});
  }

  private checkCurrentTimestamp(): void {
    this.getTimeStamp()
      .then((timestamp) => {
        if (this.initialTimestamp !== timestamp) {
          this.isPageReloadRequired = true;
        }
      })
      .catch(() => {});
  }

  private getTimeStamp(): Promise<any> {
    return this.http
      .get(`${TIMESTAMP_FILE}?t=${new Date().getTime()}`)
      .pipe(map((result: any) => result.timestamp))
      .toPromise();
  }
}
