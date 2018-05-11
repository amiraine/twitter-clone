import { Component, OnInit } from '@angular/core';
import { Tweet } from './../models/tweet.model';
import { UserInfoComponent } from './../user-info/user-info.component'
import { TimelineService } from '../timeline.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TimelineService]
})
export class TimelineComponent implements OnInit {
  constructor(private timelineService: TimelineService) { }
  ngOnInit() {
    this.tweets = this.timelineService.getTweets();
  }
  tweets: FirebaseListObservable<any[]>;

  // makeTweet(tweet){
  //   let newTweet = new Tweet('Ami','ik4rus','./assets/usericon.png',tweet,'',0,0,0);
  //   this.tweets.splice(0,0,newTweet);
  // }

}
