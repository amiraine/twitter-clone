import { Component, OnInit } from '@angular/core';
import { Tweet } from './../models/tweet.model';
import { UserInfoComponent } from './../user-info/user-info.component'


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  tweets: Tweet[];

  makeTweet(tweet){
    let newTweet = new Tweet('Ami','ik4rus','./assets/usericon.png',tweet,'',0,0,0);
    this.tweets.splice(0,0,newTweet);
  }

}
