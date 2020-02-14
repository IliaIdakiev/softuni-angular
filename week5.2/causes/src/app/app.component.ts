import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get isReady(): boolean {
    return this.userUservice.currentUser !== undefined;
  }

  constructor(private userUservice: UserService) {

  }
}
