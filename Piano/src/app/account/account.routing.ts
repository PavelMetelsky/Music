import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationStepComponent } from './sign-up/confirmation-step/confirmation-step.component';
import { FinishComponent } from './sign-up/finish/finish.component';
import { PhoneStepComponent } from './sign-up/phone-step/phone-step.component';
import { ProfileStepComponent } from './sign-up/profile-step/profile-step.component';
import { RoleStepComponent } from './sign-up/role-step/role-step.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
        children: [
          { path: '', redirectTo: 'role', pathMatch: 'full' },
          { path: 'role', component: RoleStepComponent },
          { path: 'phone', component: PhoneStepComponent },
          { path: 'profile', component: ProfileStepComponent },
          { path: 'confirmation', component: ConfirmationStepComponent },
          { path: 'finish', component: FinishComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
