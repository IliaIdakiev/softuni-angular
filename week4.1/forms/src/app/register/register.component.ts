import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { passwordMatch } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      ext: ['+971', [Validators.required]],
      phone: ['', [Validators.required]],
      role: ['', [Validators.required]],
      passwords: fb.group({
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]]
      }, { validators: [passwordMatch] }),
      // addresses: fb.array([fb.group({}), fb.group({})])
    });
  }

  ngOnInit() {
  }

  submitHandler() {
    console.log(this.registerForm.value);
  }

}
