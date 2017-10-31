import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  createDate:Date
  name:string
  listId: number
  updateDate: Date
  createdBy: string
  updatedBy:Date
  version:number
  category:string
  level:string
  priority:number
  //parent:ItemComponent
  parentid:number
  
  constructor() { }

  ngOnInit() {
  }

}
