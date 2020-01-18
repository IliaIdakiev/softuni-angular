import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test App Title';
  badCurly = '';
  visible = false;
  users = [
    {
      name: 'Test 1',
      age: 10
    },
    {
      name: 'Test 2',
      age: 11
    },
    {
      name: 'Test 3',
      age: 10
    }
  ];

  toggleVisible(event: MouseEvent) {
    console.log(event);
    this.visible = !this.visible;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  deleteUserHandler(user) {
    this.users = this.users.filter(u => u !== user);
  }
}
