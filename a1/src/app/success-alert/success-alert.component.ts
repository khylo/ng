import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  myvar:string
  myvar2:string

  constructor() { }

  ngOnInit() {
  }

  parseInput(event:Event){
    console.log(event)
    this.myvar2=(<HTMLInputElement>event.target).value+"!!"
  }

}
