import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweetTL: Tweet[] = [
    new Tweet('bob','@bob','I need more coffee #TGIF'),
    new Tweet('Trillary Clinton','@gaymergirl','Lorem ipsum dolor amet palo santo la croix paleo coloring book portland deep v literally forage copper mug taiyaki.'),
    new Tweet('russianspambot','@cyka','You probably haven\'t heard of them beard prism literally squid.')
  ];
}
