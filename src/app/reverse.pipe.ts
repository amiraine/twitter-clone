import {Pipe, PipeTransform} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: "reverse",
  pure: false
})


export class ReversePipe implements PipeTransform {
  transform(value){
    if(!value) return;
    return value.reverse();
  }
}
