import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
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
  thisForm = false;
  editProfile(){
    this.thisForm = true;
  }
  finishEditing(){
    this.thisForm = false;
  }
}
