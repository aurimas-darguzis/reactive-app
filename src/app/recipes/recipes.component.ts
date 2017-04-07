import { Observable } from 'rxjs/Observable';
import { RecipesService, Recipe } from './../shared';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  selectedRecipe: Recipe;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipes$ = this.recipesService.recipes$;
    this.recipesService.loadRecipes();
  }

  resetRecipe() {
    const emptyRecipe: Recipe = { id: null, name: '', ingredients: '', nutrition: '', method: '' };
    this.selectedRecipe = emptyRecipe;
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  saveRecipe(recipe: Recipe) {
    this.recipesService.saveRecipes(recipe);
    this.resetRecipe();
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe);
    this.resetRecipe();
  }

}
