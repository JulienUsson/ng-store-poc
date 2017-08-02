import { ActionReducer, Action } from '@ngrx/store';
import { articles } from '../api/articles';
import { Article } from '../article';

export const ALL = 'ALL';

export function articlesReducer(state: Array<Article> = [], action: Action) {
    switch (action.type) {
        case ALL:
            return articles;

        default:
            return state;
    }
}