import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {

  username: string;
  random: boolean

  getColor(){
    //console.log("Random = "+this.random)
    return (this.random)? "red":"green"
  }

  empty(){
    if(!this.username)
      return true;
    console.log( "In empty() "+this.username.length )
    return this.username.length==0
  }
  
  clear(){
    //console.log("In clear()"+this.username)
    this.username=""
  }
  constructor() { 
    this.random = Math.random() > 0.5 ? true: false
  }

  ngOnInit() {
  }

}
