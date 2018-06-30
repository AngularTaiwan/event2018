import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:scroll', ['$event']) onScrollEvent($event) {
    const windowHeight = $event.srcElement.documentElement.clientHeight;
    const windowScroll = $event.srcElement.documentElement.scrollTop;
    if (windowHeight <= 888) {
      if (windowScroll / windowHeight >= 0.5) {
        document.getElementsByClassName('mat-card')[0].classList.add('slideInAnimation');
        document.getElementsByClassName('mat-card')[1].classList.add('slideInAnimation');
        document.getElementsByClassName('mat-card')[2].classList.add('slideInAnimation');
      }
    }else if ( windowHeight > 888 ) {
      document.getElementsByClassName('mat-card')[0].classList.add('slideInAnimation');
      document.getElementsByClassName('mat-card')[1].classList.add('slideInAnimation');
      document.getElementsByClassName('mat-card')[2].classList.add('slideInAnimation');
    }
  }
}
