import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';

@Injectable()
export class LikeService {

  constructor() { }
  selectedTweet = null;
  addLike(clickedTweet){
    let click = 0;
    clickedTweet = this.selectedTweet;
    if(click % 2 != 0){
      clickedTweet.likes += 1
    } else {
      clickedTweet.liks -=1
    }
  }
}
