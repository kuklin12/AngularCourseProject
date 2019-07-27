import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipie', 'This is only a test', 'https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg')
  ];

  getRecipies() {
    return this.recipes.slice();
  }
}
