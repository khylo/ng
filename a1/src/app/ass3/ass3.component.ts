import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  buttonOn:boolean=true;
  updates:string[]=[]

  constructor() { }

  buttonPress(){
    if(this.buttonOn)
      this.buttonOn=false
    else
      this.buttonOn=true
    this.updates.push(" Button Pressed "+new Date())
  }

  getColor(i){
    if(i>4)
      return "white"
    else return "black"
  }

  getClass(i){
    if(i>4)
      return "five"
    else return " "
  }

  ngOnInit() {
  }

}
