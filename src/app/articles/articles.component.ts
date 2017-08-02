import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { Store } from '@ngrx/store';
import { ALL } from '../reducers/articles';

interface AppState {
  articles: Array<Article>;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Observable<Array<Article>>;

  constructor(private store: Store<AppState>) {
    this.articles = store.select('articles');
    this.store.dispatch({ type: ALL });
  }

  ngOnInit() {
  }

}
