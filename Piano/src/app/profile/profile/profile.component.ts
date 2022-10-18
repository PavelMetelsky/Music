import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'p-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public userModel: IUserDetails;

  constructor(
    private storageService: StorageService,
    private navigate: NavigateService,
    private usersService: UsersService
  ) {
    this.usersService
      .getUser(this.storageService.get('userId'))
      .subscribe((user) => {
        this.userModel = user;
        console.log(user);
      });
  }

  public onMainPage(): void {
    this.navigate.toHomePage();
  }
}
