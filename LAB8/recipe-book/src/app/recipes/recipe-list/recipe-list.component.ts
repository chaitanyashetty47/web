import { Component, OnInit, EventEmitter,ChangeDetectionStrategy, Output } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RecipeListComponent implements OnInit{
  constructor(){ }
recipes:Recipe[]=[
  new Recipe('Chicken Biryani','Delicious Chicken Biryani','https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg'),
  new Recipe('Hakka Noodles','Tasty Hakka Noodles','https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-1.jpg')

];

  
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe:Recipe){
    console.log(recipe.name);
    this.recipeWasSelected.emit(recipe);
  }

}
