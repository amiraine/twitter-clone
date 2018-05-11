import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  notes: Note[] = [
    new Note("Bob", "Hi how are you?","all"),
    new Note("Nigerian Prince", "REQUEST FOR ASSISTANCE-STRICTLY CONFIDENTIAL, I am Dr. Bakare Tunde, the cousin of Nigerian Astronaut...", "all"),
    new Note("riley", "lol ttyl", "mentions"),
    new Note("yawn","lorem ipsum", "")
  ]
  constructor() { }

  ngOnInit() {
  }

}
