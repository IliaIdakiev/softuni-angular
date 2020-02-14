import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../user/user.service';
import { ICause } from '../shared/interfaces/cause';

@Pipe({
  name: 'canDonate'
})
export class CanDonatePipe implements PipeTransform {

  constructor(private userService: UserService) { }

  transform(cause: ICause): any {
    return this.userService.isLogged && this.userService.currentUser._id !== cause.author._id;
  }

}
