import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from './models/tweet.model';

@Pipe({

})
export class CompletenessPipe implements PipeTransform{
  transform(input: Tweet[], args){
    return input;
  }
}
