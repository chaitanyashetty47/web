import { Recipe } from "./recipe.model";

export class RecipeService{
  private recipes:Recipe[]=[
    //new Recipe('Chicken Biryani','This is a simple Chicken Biryani','https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg'),
    //new Recipe('Hakka Noodles','This is a Hakka Noodles','https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-1.jpg')
  
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}