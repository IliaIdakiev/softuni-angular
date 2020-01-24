import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // TodoService,
    // {
    //   provide: TodoService,
    //   useValue: {
    //     loadTodos() {
    //       console.log('HAHA!');
    //     }
    //   }
    // },
    // {
    //   provide: TodoService,
    //   useFactory: () => {
    //     if ()
    //     return new TodoService()
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
