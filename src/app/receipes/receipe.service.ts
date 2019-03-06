import { Receipe } from "./receipe.model";
import {EventEmitter,Injectable} from '@angular/core'
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class ReceipeService{
    constructor(private slService:ShoppingListService){

    }
    receipeSelected =new EventEmitter<Receipe>();
    /*make property receipes private so that we cannot access it from outside*/
    private receipes: Receipe[]=[
    new Receipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzelc- just awesome',
        'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-7-600x900.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French fries',20),
        ]),
    new Receipe(
        'Big Fat Burger',
        'What else you need to say?',
        'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-500x540_CR.png',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',2),
        ])
  ];

    /*in order to access, return it from outside use getReceipes func 
    if we just return this.receipes it will return direct reference to this array ,
     since arrays and  object are reference types in js
    whatever we need to modify to receipes array we will do it in this service 
    hence we will use slice method to  return a new array i.e copy of this array*/
    
    getReceipes(){
        return this.receipes.slice();
    }
    getReceipe(index:number){
        return this.receipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);   
    }
}