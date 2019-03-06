import { Component, OnInit ,Input} from '@angular/core';
import {Receipe} from '../receipe.model';
import { ReceipeService } from "../receipe.service";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  id: number;
 /* @Input() */
 receipe: Receipe;
  constructor(private receipeService: ReceipeService,
              private router:Router,
              private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe((params:Params) =>{
      this.id=+params['id'];/*without + it will return a string so cast it to a number*/
      this.receipe=this.receipeService.getReceipe(this.id);
    })
  }
  onAddToShoppingList(){
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients)
  }
  onEditReceipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  /*the below is a more complex way of doing the same navigation using idS*/
   // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }

}
