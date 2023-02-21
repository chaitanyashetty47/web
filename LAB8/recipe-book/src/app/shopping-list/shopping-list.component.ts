import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
  }

  ingredients :Ingredient[]=[
    new Ingredient('Brinjal',5),
    new Ingredient('Papaya',10),
    new Ingredient('Potato',2),
    new Ingredient('Onion',8)


  ];

  onIngredientAdded(ingredient: Ingredient){
    console.log("hi ingredienct added")
    this.ingredients.push(ingredient);
  }

}
