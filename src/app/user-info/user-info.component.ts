import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { Tweet } from './../models/tweet.model';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  newUser = new User('Ami','ik4rus')
  newTweet = new Tweet('Ami','ik4rus','./assets/usericon.png','','',0,0,0);
  thisForm = false;
  editProfile(){
    this.thisForm = true;
  }
  finishEditing(){
    this.thisForm = false;
  }
}
