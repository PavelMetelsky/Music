import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrimengModule } from './primeng.module';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './loading/loading.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [NotFoundComponent, LayoutComponent, LoadingComponent],
  imports: [CommonModule, PrimengModule],
  providers: [UsersService],
})
export class SharedModule {}
