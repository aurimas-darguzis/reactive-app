import { Recipe } from './recipe.model';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_RECIPES = 'ADD_RECIPE';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

const comparator = 'id';

export const recipes: ActionReducer<Recipe[]> = (state: Recipe[] = [], action: Action) => {
    switch (action.type) {
        case ADD_RECIPES:
            return action.payload;
        
        case CREATE_RECIPE:
            return [...state, action.payload];

        case UPDATE_RECIPE:
            return state.map(recipe => {
                return recipe[comparator] === action.payload[comparator] ? Object.assign({}, recipe, action.payload) : recipe;
            });
        
        case DELETE_RECIPE:
            return state.filter(recipe => {
                return recipe[comparator] !== action.payload[comparator];
            });

        default:
            return state;
    }
}