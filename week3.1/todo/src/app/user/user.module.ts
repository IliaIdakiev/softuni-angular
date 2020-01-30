import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [ListComponent]
})
export class UserModule { }
