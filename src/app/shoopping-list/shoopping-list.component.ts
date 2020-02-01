import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoopping-list',
  templateUrl: './shoopping-list.component.html',
  styleUrls: ['./shoopping-list.component.css']
})
export class ShooppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
