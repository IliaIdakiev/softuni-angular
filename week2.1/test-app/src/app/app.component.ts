import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TodoService } from './todo.service';
import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap, switchMap, debounceTime, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// function fromFetch(url: string) {
//   return new Observable<Response>((observer) => {
//     const controller = new AbortController();
//     let hasFinished = false;
//     fetch(url, { signal: controller.signal }).then(res => {
//       observer.next(res);
//       observer.complete();
//       hasFinished = true;
//     }).catch(err => observer.error(err));

//     return () => {
//       if (hasFinished) { return; }
//       controller.abort();
//     };
//   });
// }

declare const data;

console.log(data);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements AfterViewInit {
  title = 'test-app';
  todo = {
    title: 'HELLO!'
  };

  data$: Observable<any>;

  @ViewChild('input', { static: false }) input: ElementRef;

  constructor(private http: HttpClient) {
    // console.log(todoService);
    // todoService.loadTodos();
    setTimeout(() => {
      this.title = '123';
      this.todo = { title: '123' };
      // this.todo.title = '123';
    }, 5000);
  }

  ngAfterViewInit() {
    this.data$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        switchMap(query => {
          return this.http.get(`https://jsonplaceholder.typicode.com/users?q=${query}`);
        }),
      );

  }

}
