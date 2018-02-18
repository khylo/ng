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
  updatedBy:string
  version:number
  category:string
  level:string
  priority:number
  //parent:ItemComponent
  parentid:number

  constructor(name:string, user:string, category:string = "event", level:string = "normal" , priority:number = 100) {
    this.name=name;
    this.category=category;
    this.level=level;
    this.priority=priority;
    this.createDate=new Date();
    this.updateDate=new Date();
    this.createdBy=user;
    this.updatedBy=user;

   }

  ngOnInit() {
  }

}
