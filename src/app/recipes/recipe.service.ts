import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  private recipes:Recipe[] = [
    new Recipe('Cheese Pizza', 'How to make a cheese pizza',
              'https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v005_x0010.jpg',
              [
                new Ingredient('Olives', 20),
                new Ingredient('French cheese', 1)
              ]),
    new Recipe('Chicken Pizza', 'How to make a chicken pizza',
                  'https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v005_x0010.jpg',
                 [
                  new Ingredient('Chicken Breast', 2),
                  new Ingredient('Mozzarella', 2)
                  ]),
  ];

   constructor(private slService: ShoppingListService) {}

    // slice() method extracts a section of an array and returns a new array.
    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(index: number) {
       return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

}
