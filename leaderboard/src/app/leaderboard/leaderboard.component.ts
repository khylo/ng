import { Component, OnInit } from '@angular/core';
import {LbUser} from '../leaderboard/lbUser.model'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  users: LbUser[] = [new LbUser("one",5), new LbUser( "two", 3)]

  constructor() { }

  ngOnInit() {
  }

}
