import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/password-match';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../../error-styles.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  get currentUser() {
    return this.userService.currentUser;
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z0-9.-_]{6,}@gmail\.com'))]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]]
      }, {
        validators: [passwordMatch]
      })
    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
