import { Component, OnInit } from '@angular/core';
import {Receipe} from '../receipe.model'; 

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[]=[
    new Receipe('A Test Receipe','This is simply a test receipe','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Receipe('A Test Receipe','This is simply a test receipe','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
