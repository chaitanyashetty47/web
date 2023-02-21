import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe; //decorator to take input from recipe list(takes input from recipe which takes input from recipeEL in recipe-list component) 
  @Output() recipeSelected = new EventEmitter<void>();
  
  ngOnInit(){

  }
  
  onSelected(){
    this.recipeSelected.emit();
  }
}


