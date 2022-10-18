import { Component, ViewEncapsulation } from '@angular/core';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { UserService } from 'src/app/shared/services/user.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'p-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  public model: ILoginModel = {
    email: '',
    password: '',
    //rememberMe: false,
  };

  constructor(
    private navigate: NavigateService,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  public toLogin(): void {
    // console.log(this.model);
    this.userService.login(this.model).subscribe((data: any) => {
      if (data.flag) {
        //console.log('successful');
        this.storageService.setItem('userId', data.flag);
        this.navigate.toUserProfile();
      } else {
        console.log('error');
      }
    });
  }

  public toSignup(): void {
    this.navigate.toSignup();
  }
}
