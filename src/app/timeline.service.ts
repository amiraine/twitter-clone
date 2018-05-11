import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet.model';
import { TIMELINE } from './mock-timeline';

@Injectable()
export class TimelineService {

  constructor() { }
  getTweets(){
    return TIMELINE;
  }
}
