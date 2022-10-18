import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<any>(URLS.USERS);
  }

  public getUser(userId: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(URLS.USER(userId));
  }

  public saveUser(userModel: IUserDetails): Observable<void> {
    return this.http.post<void>(URLS.SAVE_USER, userModel);
  }
}
