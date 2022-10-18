import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RoleStepComponent } from './sign-up/role-step/role-step.component';
import { ProfileStepComponent } from './sign-up/profile-step/profile-step.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PhoneStepComponent } from './sign-up/phone-step/phone-step.component';
import { PrimengModule } from '../shared/primeng.module';
import { ConfirmationStepComponent } from './sign-up/confirmation-step/confirmation-step.component';
import { TicketService } from './sign-up/ticketservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FinishComponent } from './sign-up/finish/finish.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RoleStepComponent,
    PhoneStepComponent,
    ProfileStepComponent,
    ConfirmationStepComponent,
    SignUpComponent,
    FinishComponent,
  ],
  providers: [TicketService],
})
export class AccountModule {}
