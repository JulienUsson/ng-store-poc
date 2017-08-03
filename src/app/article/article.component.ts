import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Output() onAddToPanierClick = new EventEmitter();
  @Input() article: Article;

  addToPanier() {
    this.onAddToPanierClick.emit(this.article);
  }

  ngOnInit() {
  }

}
