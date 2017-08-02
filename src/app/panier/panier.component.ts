import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { Store } from '@ngrx/store';
import { REMOVE } from '../reducers/panier';

interface AppState {
  panier: Array<Article>;
}

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Observable<Array<Article>>;

  constructor(private store: Store<AppState>) {
    this.panier = store.select('panier');
  }

  removeFromPanier(index: number) {
    this.store.dispatch({ type: REMOVE, payload: index });
  }


  ngOnInit() {
  }

}
