import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

import { assign, forEach, isEqual, isString, keys } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { URL_PARAMS_SEPARATOR } from '../../constants';
import { NavigateService } from './navigate.service';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class StateParamsService {
  public url: Observable<IUrlChangeParams>;
  private stateUrlSubject: BehaviorSubject<IUrlChangeParams>;

  public get stateParamsUrls(): IStateParamsUrls {
    const { previous } =
      (this.stateUrlSubject && this.stateUrlSubject.value) || {};

    return {
      currentUrl: window.location.href,
      previousUrl: previous && previous.url,
    };
  }

  private static getAllRouteSnapshots(
    route: ActivatedRouteSnapshot
  ): ActivatedRouteSnapshot[] {
    if (route.children.length === 0) {
      return [route];
    }
    const routes = route.children.map((childRoute: ActivatedRouteSnapshot) =>
      StateParamsService.getAllRouteSnapshots(childRoute)
    );
    if (routes.length === 0) {
      return [];
    }

    return routes.reduce((a, b) => a.concat(b), [route]);
  }

  private static splitParams(params: string): number[] {
    return params
      ? params.split(URL_PARAMS_SEPARATOR).filter(Boolean).map(Number)
      : [];
  }

  private static getParamsFromSnapshots(
    routeSnapshots: ActivatedRouteSnapshot[]
  ): IStateParams {
    const params: IStateParams = {} as IStateParams;
    forEach(routeSnapshots, (snapshot) => {
      assign(params, snapshot.queryParams, snapshot.params);
    });

    return assign({}, params);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigate: NavigateService
  ) {
    this.stateUrlSubject = new BehaviorSubject<IUrlChangeParams>(null);
    this.url = this.stateUrlSubject
      .asObservable()
      .pipe(filter((params) => params != null));
  }

  public get params(): IStateParams {
    const params = StateParamsService.getParamsFromSnapshots(
      StateParamsService.getAllRouteSnapshots(this.route.snapshot)
    );
    keys(params).forEach((k) => {
      const value = params[k];
      if (isString(value) && value.indexOf(URL_PARAMS_SEPARATOR) >= 0) {
        params[k] = StateParamsService.splitParams(value);
      }
    });
    params.url = this.router.url;

    return params;
  }

  public onUrlChanged(): void {
    const state = this.stateUrlSubject.value;

    const previous = this.stateUrlSubject.value
      ? this.stateUrlSubject.value.current
      : null;
    if (!isEqual(this.params, state && state.current)) {
      this.navigate.addToHistory(this.params.url);
      this.stateUrlSubject.next({
        current: this.params,
        previous,
        diff: Utils.diff<IStateParams>(this.params, previous),
      });
    }
  }
}
