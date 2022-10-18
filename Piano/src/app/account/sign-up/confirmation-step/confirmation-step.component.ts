import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { TicketService } from '../ticketservice';

@Component({
  selector: 'p-confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.scss'],
})
export class ConfirmationStepComponent implements OnInit {
  public userModel: IUserDetails = {} as IUserDetails;
  public ticketInformation: any;

  constructor(
    public ticketService: TicketService,
    private navigate: NavigateService,
    private usersService: UsersService
  ) {}

  public ngOnInit(): void {
    this.ticketInformation = this.ticketService.ticketInformation;
  }

  public complete(): void {
    this.ticketService.complete();

    console.log(this.ticketInformation);
    console.log('this.ticketInformation');

    this.userModel.role = this.ticketInformation.personalInformation.role;
    this.userModel.country = this.ticketInformation.seatInformation.country;
    this.userModel.city = this.ticketInformation.seatInformation.city;
    this.userModel.telephone = this.ticketInformation.seatInformation.phone;
    this.userModel.username =
      this.ticketInformation.paymentInformation.fullName;
    this.userModel.email = this.ticketInformation.paymentInformation.login;
    this.userModel.password =
      this.ticketInformation.paymentInformation.password;

    console.log(this.userModel);

    this.usersService.saveUser(this.userModel).subscribe((data: any) => {
      console.log(...data);
      console.log('saved');
    });

    this.navigate.toFinish();
  }

  public prevPage(): void {
    this.navigate.toSignupProfile();
  }
}
