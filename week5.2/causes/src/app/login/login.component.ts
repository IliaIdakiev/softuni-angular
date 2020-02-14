import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../error-styles.scss']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('[a-zA-Z0-9.-_]{6,}@gmail\.com');

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin({ email, password }: { email: string, password: string }) {
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['']);
    }, console.error);
  }
}
