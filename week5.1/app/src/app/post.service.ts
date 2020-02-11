import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: BehaviorSubject<any> = new BehaviorSubject(null);

  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient) { }

  loadPosts() {
    this.http.get<any[]>('posts').subscribe({
      next: (val) => this.posts.next(val)
    });
  }
}
