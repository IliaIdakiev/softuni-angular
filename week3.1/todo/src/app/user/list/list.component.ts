import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any[];

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.users = activatedRoute.snapshot.data.userList;
  }

  ngOnInit() {
    // this.userService.loadUser().subscribe(users => this.users = users);
  }

  selectUserHandler(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
