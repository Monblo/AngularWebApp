import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is a test', 'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain'),
    new Recipe('Another Test recipe', 'This is a test', 'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain')
  ];
  
  constructor(){}

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
