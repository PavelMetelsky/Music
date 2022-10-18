import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { TicketService } from '../ticketservice';

@Component({
  selector: 'p-phone-step',
  templateUrl: './phone-step.component.html',
  styleUrls: ['./phone-step.component.scss'],
})
export class PhoneStepComponent implements OnInit {
  public submitted: boolean = false;

  public seatInformation: any;

  constructor(
    public ticketService: TicketService,
    private navigate: NavigateService
  ) {}

  public ngOnInit(): void {
    this.seatInformation = this.ticketService.ticketInformation.seatInformation;
  }

  public nextPage(): void {
    if (this.seatInformation.country) {
      this.ticketService.ticketInformation.seatInformation =
        this.seatInformation;
      this.navigate.toSignupProfile();

      return;
    }

    this.submitted = true;
  }

  public prevPage() {
    this.navigate.toSignupRole();
  }
}
