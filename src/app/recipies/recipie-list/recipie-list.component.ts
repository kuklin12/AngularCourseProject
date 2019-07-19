import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipie', 'This is only a test','https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
