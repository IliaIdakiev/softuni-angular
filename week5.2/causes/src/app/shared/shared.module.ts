import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchDirective } from './validators/directives/password-match.directive';



@NgModule({
  declarations: [PasswordMatchDirective],
  imports: [
    CommonModule
  ],
  exports: [
    PasswordMatchDirective
  ]
})
export class SharedModule { }
