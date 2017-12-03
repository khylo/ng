  import { Component, OnInit } from '@angular/core';
  import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("pastry", 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
