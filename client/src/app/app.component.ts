import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  eventDate = new Date(2018, 11, 16, 9, 0, 0, 0);
  lat = 24.323792;
  lng = 120.696616;
  arr = ['12', '11', '10', '789', '456', '123'];
}
