import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private idChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {  }

  ngOnInit(): void {
  this.ingredients = this.shoppingListService.getIngredients();
  this.idChangeSub = this.shoppingListService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        }
    )
  }

  onEditItem(index: number){
    this.shoppingListService.startingEditing.next(index);
  }

  ngOnDestroy() {
    this.idChangeSub.unsubscribe();
  }
}
