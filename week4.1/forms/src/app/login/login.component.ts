import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'test@abv.bg';
  password = 'test';

  constructor() { }

  ngOnInit() {
  }

  loginHandler(data) {
    console.log(data);
  }

}
