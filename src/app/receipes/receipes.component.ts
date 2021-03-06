import { Component, OnInit,Input } from '@angular/core';
import {Receipe} from './receipe.model';
import { ReceipeService } from "./receipe.service";

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {
   /*@Input() receipe:Receipe;*/
  selectedReceipe:Receipe;
  constructor(private receipeService:ReceipeService) { }

  ngOnInit() {
    this.receipeService.receipeSelected.subscribe((receipe:Receipe) => {
      this.selectedReceipe=receipe;
    })
  }

}
