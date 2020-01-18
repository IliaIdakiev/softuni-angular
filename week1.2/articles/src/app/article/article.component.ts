import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  symbols = 250;

  @Input() article: Article;
  visibleDescriptionLength = 0;
  showImage = true;

  get hasNoMoreInfo() {
    return this.description.length < this.visibleDescriptionLength;
  }

  get description() {
    return this.article.description.slice(0, this.visibleDescriptionLength);
  }

  constructor() { }

  hideDescription() {
    this.visibleDescriptionLength = 0;
  }

  readMore() {
    if (this.description.length < this.visibleDescriptionLength) { return; }
    this.visibleDescriptionLength = this.visibleDescriptionLength + this.symbols;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
  }

}
