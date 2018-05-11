import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notes: Note[] = [
    new Note("Bob", "Lorem ipsum dolor amet drinking vinegar green juice meggings vice. Ethical hell of readymade pork belly","all"),
    new Note("some guy", " gluten-free distillery disrupt asymmetrical helvetica direct trade.", "all"),
    new Note("riley", "cho park PBR&B banh mi, humblebrag meditation next level yr salvia direct trade. Slow-carb la croix master cleanse biodiesel @ik4rus", "mentions")
  ]
  constructor() { }

  ngOnInit() {
  }

}
