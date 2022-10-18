import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TicketService } from './ticketservice';
@Component({
  selector: 'p-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent {
  public model: ISignUpModel = {
    email: '',
    confirmEmail: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    termsAndConditionsAccepted: false,
  };

  public items: MenuItem[];

  public subscription: Subscription;

  constructor(
    public messageService: MessageService,
    public ticketService: TicketService
  ) {}

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Role',
        routerLink: 'role',
      },
      {
        label: 'Phone',
        routerLink: 'phone',
      },
      {
        label: 'Profile',
        routerLink: 'profile',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
      {
        label: 'Finish',
        routerLink: 'finish',
      },
    ];

    this.subscription = this.ticketService.paymentComplete$.subscribe(
      (personalInformation) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Order submitted',
          detail:
            'Dear, ' +
            personalInformation.firstname +
            ' ' +
            personalInformation.lastname +
            ' your order completed.',
        });
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
