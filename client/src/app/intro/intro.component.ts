import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  eventDate = new Date(2018, 11, 16, 9, 0, 0, 0);
  constructor() { }
  ngOnInit() {
  }
}
