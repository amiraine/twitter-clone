import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';
import { TIMELINE } from './mock-timeline';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TimelineService {
  tweets: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.tweets = database.list('tweets')
  }
  getTweets(){
    let timeline: Tweet [];
    // for(var i = this.tweets.length; )
    return this.tweets;
  }
  postTweet(newTweet: Tweet){
    this.tweets.push(newTweet)
  }
}
