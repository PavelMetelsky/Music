import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../shared/primeng.module';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
