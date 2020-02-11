import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts$: Observable<any[]> = this.postService.posts$;

  constructor(private postService: PostService) {
    this.postService.loadPosts();
  }

}
