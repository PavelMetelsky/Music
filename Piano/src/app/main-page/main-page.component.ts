import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../shared/base/navigate.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'p-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public user: string = 'init';

  constructor(
    private usersService: UsersService,
    private navigate: NavigateService
  ) {}

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: any) => {
      this.user = { ...data };
      console.log(...data);
    });
  }

  public toUserProfile(): void {
    this.navigate.toUserProfile();
  }
}
