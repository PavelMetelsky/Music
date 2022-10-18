import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { StorageService } from './storage.service';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from './shared/primeng.module';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [StorageService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
