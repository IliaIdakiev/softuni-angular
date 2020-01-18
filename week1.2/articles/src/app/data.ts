import { data } from './seed';
import { Article } from './article.model';
export class Data {
  private atricles: Article[];

  constructor() {
    this.atricles = data.map(d => new Article(d.title, d.description, d.author, d.imageUrl));
  }

  getData() {
    return this.atricles;
  }
}
