import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROLES } from 'src/app/constants';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { TicketService } from '../ticketservice';

@Component({
  selector: 'p-role-step',
  templateUrl: './role-step.component.html',
  styleUrls: ['./role-step.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RoleStepComponent implements OnInit {
  public personalInformation: any;
  public submitted: boolean = false;
  public options: any[];
  public value: any;

  constructor(
    public ticketService: TicketService,
    private navigate: NavigateService
  ) {
    this.options = [
      { img: '../assets/account/mentor.svg', role: ROLES.MENTOR },
      { img: '../assets/account/student.svg', role: ROLES.STUDENT },
    ];
  }

  public ngOnInit(): void {
    this.personalInformation =
      this.ticketService.getTicketInformation().personalInformation;
  }

  public nextPage(): void {
    if (this.personalInformation.role != null) {
      console.log(this.personalInformation.role);
      this.ticketService.ticketInformation.personalInformation =
        this.personalInformation;

      this.navigate.toSignupPhone();

      return;
    }

    this.submitted = true;
  }
}
