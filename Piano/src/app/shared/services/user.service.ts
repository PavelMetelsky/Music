import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/app/constants';
import { StorageService } from 'src/app/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public login(model: ILoginModel): Observable<any> {
    return this.http.post<any>(URLS.LOGIN, model);
  }
}
