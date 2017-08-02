import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { Store } from '@ngrx/store';
import { ADD } from '../reducers/panier';

interface AppState {
  panier: Array<Article>;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  panier: Observable<Array<Article>>;
  @Input() article: Article;

  constructor(private store: Store<AppState>) {
    this.panier = store.select('panier');
  }

  addToPanier(article: Article) {
    this.store.dispatch({ type: ADD, payload: article });
  }

  ngOnInit() {
  }

}
