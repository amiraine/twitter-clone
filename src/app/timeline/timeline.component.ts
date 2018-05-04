import { Component, OnInit } from '@angular/core';
import { Tweet } from './../models/tweet.model';
import { UserInfoComponent } from './../user-info/user-info.component'
//not sure how to get the default username in here
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  tweets: Tweet[] = [
    new Tweet('bob','@bob','I need more coffee #TGIF',0,3,5),

    new Tweet('Trillary Clinton','@gaymergirl','Lorem ipsum dolor amet palo santo la croix paleo coloring book portland deep v literally forage copper mug taiyaki.',1,3,2),

    new Tweet('russianspambot','@cyka','You probably haven\'t heard of them beard prism literally squid.',2,2,10)
  ];
  makeTweet(tweet){
    let newTweet = new Tweet('name','@handle',tweet,0,0,0);
    this.tweets.splice(0,0,newTweet);
  }
}
