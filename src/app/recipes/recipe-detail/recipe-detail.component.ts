import { Recipe } from './../../shared';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent implements OnInit {
  originalName: string;
  selectedRecipe: Recipe;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set recipe(value: Recipe) {
    if (value) { this.originalName = value.name }
    this.selectedRecipe = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
