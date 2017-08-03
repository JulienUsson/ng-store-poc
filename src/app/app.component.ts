import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Article } from './article';

interface AppState {
  store: Array<Article>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panier: Observable<Array<Article>>;

  constructor(private store: Store<AppState>) {
    this.panier = store.select('panier');
  }
}
