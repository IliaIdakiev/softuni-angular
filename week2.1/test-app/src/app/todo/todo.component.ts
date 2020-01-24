import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from '../todo.service';


// APP CMP ----- TODO LIST CMP (onPush) ----- TODO ITES (Default)
//                                      ----- TODO ITES (Default)

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input() todo: { title: string };

  constructor(todoService: TodoService) { }

  ngOnInit() {
  }

}
