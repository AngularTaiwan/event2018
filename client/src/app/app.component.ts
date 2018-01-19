import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventDate = new Date(2018, 11, 24, 12, 0, 0, 0);
  lat = 24.323792;
  lng = 120.696616;
}
