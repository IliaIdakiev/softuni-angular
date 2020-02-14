import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit({ email, passwords: { password } }: { email: string, passwords: { password: string } }) {
    this.userService.register(email, password).subscribe(() => {
      this.router.navigate(['login']);
    }, console.error);
  }
}
