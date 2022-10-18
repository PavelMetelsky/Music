import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TicketService {
  public ticketInformation = {
    personalInformation: {
      role: null,
    },
    seatInformation: {
      country: '',
      city: '',
      phone: '',
    },
    paymentInformation: {
      fullName: '',
      login: '',
      password: '',
      confirm: '',
      links: '',
    },
  };

  private paymentComplete = new Subject<any>();

  public paymentComplete$ = this.paymentComplete.asObservable();

  public getTicketInformation() {
    return this.ticketInformation;
  }

  public setTicketInformation(ticketInformation): void {
    this.ticketInformation = ticketInformation;
  }

  public complete(): void {
    this.paymentComplete.next(this.ticketInformation);
  }
}
