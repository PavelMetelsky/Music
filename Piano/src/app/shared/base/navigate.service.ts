import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationExtras,
  Router,
} from '@angular/router';

import { isArray } from 'lodash';

import { ROUTING, STORAGE_KEYS, URL_PARAMS_SEPARATOR } from '../../constants';
import { StorageService } from '../../storage.service';

const NAVIGATION_HISTORY_MAX_LENGTH = 10;

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  private navigationHistory: string[] = [];

  private static getParameterlessUrl(
    r: ActivatedRouteSnapshot,
    result = []
  ): string {
    if (r.routeConfig && r.routeConfig.path) {
      result.push(r.routeConfig.path.split('/')[0]);
    }
    if (r.firstChild) {
      return NavigateService.getParameterlessUrl(r.firstChild, result);
    }

    return result.join('/');
  }

  private static joinParams(params: number[]): string {
    return params.join(URL_PARAMS_SEPARATOR) || null;
  }

  constructor(
    private router: Router,
    //private userService: UserService,
    //private dialogService: DialogService
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  public navigate(commands: any[], extras: NavigationExtras = {}): void {
    this.router.navigate(
      commands.map((c) => (isArray(c) ? NavigateService.joinParams(c) : c)),
      extras
    );
  }

  public toHomePage(): Promise<boolean> {
    return this.router.navigateByUrl('/');
  }

  public toLogin(extras?: NavigationExtras): void {
    this.storageService.removeJwt();
    this.router.navigate(['account/login'], extras);
  }

  public logout(): void {
    const jwt = this.storageService.getJwt();
    // this.dialogService.close();
    // if (jwt != null) {
    //   this.userService
    //     .logout(jwt)
    //     .then(() => this.toLogin())
    //     .catch(() => this.toLogin());
    // } else {
    //   this.toLogin();
    // }
  }

  public redirectIfLoggedIn(redirectUrl: string): void {
    if (this.storageService.getJwt()) {
      this.router.navigate([redirectUrl]);
    }
  }

  public changeRouteParams(params: any[], queryParams: any = null): void {
    this.router.navigate(
      [NavigateService.getParameterlessUrl(this.route.root.snapshot)].concat(
        params
      ),
      { queryParams }
    );
  }

  // public toForbidden(reason: ForbiddenReasonsType): void {
  //   if (reason === FORBIDDEN_REASONS.TIME) {
  //     this.router.navigate(['/account/inactive/expired']);
  //   }
  // }

  public toUserProfile(): void {
    this.router.navigate(['profile/user']);
  }

  public toSignup(): void {
    this.router.navigate(['account/signup']);
  }

  public toSignupRole(): void {
    this.router.navigate(['account/signup/role']);
  }

  public toSignupPhone(): void {
    this.router.navigate(['account/signup/phone']);
  }

  public toSignupProfile(): void {
    this.router.navigate(['account/signup/profile']);
  }

  public toSignupConfirmation(): void {
    this.router.navigate(['account/signup/confirmation']);
  }

  public toFinish(): void {
    this.router.navigate(['account/signup/finish']);
  }

  // public toMap(params: IStateParams): void {
  //   this.toSnapshot(params, 'map');
  // }

  public toOperatorSearch(): void {
    this.router.navigate([
      ROUTING.SNAPSHOT.path,
      ROUTING.SNAPSHOT.OPERATOR_SEARCH.path,
    ]);
  }

  public toRedirectUrl(redirectUrl: string): void {
    this.router.navigate([redirectUrl]);
  }

  public loginSucceed(jwt: JWT, redirectUrl: string): void {
    this.storageService.clearTempStorage();
    this.storageService.setJwt(jwt);
    if (redirectUrl) {
      this.navigate([redirectUrl]);
    } else {
      this.toHomePage();
    }
  }

  public back(): boolean {
    const previousUrl = this.getPreviousUrl();
    if (previousUrl) {
      return this.router.navigateByUrl(previousUrl) != null;
    }

    return false;
  }

  public addToHistory(url: string): void {
    this.navigationHistory.push(url);
    if (this.navigationHistory.length > NAVIGATION_HISTORY_MAX_LENGTH) {
      this.navigationHistory.shift();
    }
  }

  public reload(): void {
    const url = this.router.url;
    this.router.navigateByUrl('/').then(() => this.router.navigateByUrl(url));
  }

  private getPreviousUrl(): string {
    // pop current url
    this.navigationHistory.pop();

    // return prev url
    return this.navigationHistory.pop();
  }
}
