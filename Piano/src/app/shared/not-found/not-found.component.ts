import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigateService } from '../base/navigate.service';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotFoundComponent {
  constructor(private navigate: NavigateService) {}

  public back(): void {
    if (!this.navigate.back()) {
      this.navigate.toHomePage();
    }
  }
}
