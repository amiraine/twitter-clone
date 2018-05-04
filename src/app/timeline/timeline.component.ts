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
    new Tweet('bob','bob','I need more coffee #TGIF','',0,3,5),
    new Tweet('Trillary Clinton','gaymergirl','TFW you pass your code review on the first try','https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/6/2/10/anigif_enhanced-buzz-25833-1338648475-5.gif',1,3,2),
    new Tweet('russian spam bot','cyka','Just saw infinity war, my life is ruined now','',2,2,10),
    new Tweet('Kanye West','kanyewest','*ignorant screeching noises*','',903,1,1),
    new Tweet('Dylan Schink', 'cymbalmonkey','Cats are literally the best animal', 'http://purrtacular.com/wp-content/uploads/2016/12/tongue-cats-01.jpg',0,19,32),
    new Tweet('sadult','urvillageidiot','shitposting is more than just an art, it\'s a lifestyle','',5,20,143),
    
  ];
  makeTweet(tweet){
    let newTweet = new Tweet('Ami','ik4rus',tweet,'',0,0,0);
    this.tweets.splice(0,0,newTweet);
  }

}
