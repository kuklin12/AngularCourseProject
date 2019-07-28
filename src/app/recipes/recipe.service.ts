import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Risotto',
      'Good option for quick dinner!',
      'http://ujeb.se/3VcfI',
      [
        new Ingredient( 'Arborio rice', 1),
        new Ingredient('Vegetables', 1),
        new Ingredient('Bulion', 1)
      ]),
    new Recipe(
      'Pancakes',
      'That is the best breakfast!',
      'http://ujeb.se/lIhcG',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Egg', 2 )
      ])

  ];
  constructor(private slService: ShoppingListService) {
}

  getRecipies() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
