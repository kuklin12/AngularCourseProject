import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipie', 'This is only a test','https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

    onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
    }
}
