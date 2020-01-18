import { Component } from '@angular/core';
import { Data } from '../data';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  articles = new Data().getData();

}
