import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [CommonModule],
  exports: [
    ButtonModule,
    StepsModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule,
    ToastModule,
  ],
  declarations: [],
})
export class PrimengModule {}
