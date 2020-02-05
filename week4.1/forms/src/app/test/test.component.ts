import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @HostBinding('class.test') hasClassTest = true;

  constructor() { }

  ngOnInit() {
  }

}
