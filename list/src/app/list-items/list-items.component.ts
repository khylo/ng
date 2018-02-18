import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  items: Array<ItemComponent> = [new ItemComponent("Item1", "me"), new ItemComponent("Item2", "You")]

  constructor() { }

  ngOnInit() {
  }

}
