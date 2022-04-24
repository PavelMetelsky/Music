import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegestrationMainComponent } from './regestration-main/regestration-main.component';
import { RegestrationRoleComponent } from './regestration-role/regestration-role.component';
import { RegestrationDataComponent } from './regestration-data/regestration-data.component';
import { ButtonService } from './button.service';
import {RegSendService} from './reg-send.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegestrationLoginComponent } from './regestration-login/regestration-login.component';
import { RegestrationFinalComponent } from './regestration-final/regestration-final.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, RegestrationMainComponent, RegestrationRoleComponent, RegestrationDataComponent, RegestrationLoginComponent, RegestrationFinalComponent, MainPageComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ButtonService, RegSendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
