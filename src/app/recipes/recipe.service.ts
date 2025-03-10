import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test recipe',
            'This is a test',
            'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain',
            [new Ingredient('Apples', 5),
            new Ingredient('Tomatoes', 10),]),
        new Recipe('Another Test recipe',
            'This is a test',
            'https://th.bing.com/th/id/OIP.FrC-cDO5jN82bGtM1F4ehAHaE8?rs=1&pid=ImgDetMain',
            [new Ingredient('Apples', 5),
            new Ingredient('Tomatoes', 10),])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}