import { ActionReducer, Action } from '@ngrx/store';
import { Article } from '../article';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RESET = 'RESET';

export function panierReducer(state: Array<Article> = [], action: Action) {
	switch (action.type) {
		case ADD:
			return [...state, action.payload];

		case REMOVE:
			return state.filter(function (value, index) {
				return index !== action.payload;
			});

		case RESET:
			return [];

		default:
			return state;
	}
}