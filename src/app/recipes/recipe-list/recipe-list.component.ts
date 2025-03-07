import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is a test', 'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain'),
    new Recipe('A Test recipe', 'This is a test', 'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain')
  ];
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
