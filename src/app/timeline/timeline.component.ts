import { Component, OnInit } from '@angular/core';
import { Tweet } from './../models/tweet.model';
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
    new Tweet('bob','@bob','I need more coffee #TGIF'),
    new Tweet('Trillary Clinton','@gaymergirl','Lorem ipsum dolor amet palo santo la croix paleo coloring book portland deep v literally forage copper mug taiyaki.'),
    new Tweet('russianspambot','@cyka','You eprobably haven\'t heard of them beard prism literally squid.')
  ];
  makeTweet(tweet){
    let newTweet = new Tweet('user','@user',tweet);
    this.tweets.push(newTweet);
  }
}
