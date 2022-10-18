import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/base/navigate.service';

@Component({
  selector: 'p-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent {
  constructor(private navigate: NavigateService) {}

  public onMainPage(): void {
    this.navigate.toUserProfile();
  }
}
