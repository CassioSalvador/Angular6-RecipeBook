import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a test',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/10/4/0/FNM_110110-Cover-008-no-dial_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539588774.jpeg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Olives', 3)
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is a test 2',
            'https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Turkey-Dinner-Cupcakes_exps86694_TH1999449A03_16_2bC_RMS.jpg',
            [
                new Ingredient('Sweet Corn',2),
                new Ingredient('Random Stuff', 3)
            ]
        )
      ];
    
    constructor(private shoppingListService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice(); // get a copy
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}