import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('info') user: { name: string, age: number };
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor');
    console.log(this.user); // undefined
  }

  ngOnInit() {
    console.log('All inputs have been set');
    console.log(this.user); //
  }

  deleteHandler() {
    this.delete.emit(this.user);
  }
}
