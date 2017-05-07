import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Recipe } from './recipe.model';
import { AppStore } from './../app-store';
import 'rxjs/add/operator/map';
import {
    ADD_RECIPES,
    CREATE_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE
} from './recipes.reducer';

const BASE_URL = 'http://loaclhost:3000/recipes/';
const HEADER = { headers: new Headers({ 'Content-Type':'application/json '}) };

@Injectable()
export class RecipesService {
    recipes$: Observable<Recipe[]> = this.store.select('recipes');
    
    constructor(
        private http: Http,
        private store: Store<AppStore>
    ) {}

    loadRecipes() {
        return this.http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: ADD_RECIPES, payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    saveRecipes(recipe: Recipe) {
        return (recipe.id) ? this.updateRecipe(recipe) : this.createRecipe(recipe);
    }

    createRecipe(recipe: Recipe) {
        return this.http.post(`${BASE_URL}${recipe.id}`, JSON.stringify(recipe), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: CREATE_RECIPE, payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    updateRecipe(recipe: Recipe) {
        return this.http.put(`${BASE_URL}${recipe.id}`, JSON.stringify(recipe), HEADER)
            .subscribe(action => this.store.dispatch({ type: UPDATE_RECIPE, payload: recipe }));

    }

    deleteRecipe(recipe: Recipe) {
        return this.http.delete(`${BASE_URL}${recipe.id}`)
            .subscribe(action => this.store.dispatch({ type: DELETE_RECIPE, payload: recipe }));
    }
}
