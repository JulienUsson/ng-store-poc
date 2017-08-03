import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { Store } from '@ngrx/store';
import { ALL } from '../reducers/articles';
import { ADD } from '../reducers/panier';

interface AppState {
  articles: Array<Article>;
  store: Array<Article>;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Observable<Array<Article>>;
  panier: Observable<Array<Article>>;

  constructor(private store: Store<AppState>) {
    this.articles = store.select('articles');
    this.panier = store.select('panier');
    this.store.dispatch({ type: ALL });
  }

  addToPanier(article: Article) {
    this.store.dispatch({ type: ADD, payload: article });
  }

  ngOnInit() {
  }

}
