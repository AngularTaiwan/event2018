import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  showSlidInAnimation = false;

  @HostListener('document:scroll', ['$event'])
  onScrollEvent($event) {
    const windowHeight = $event.srcElement.documentElement.clientHeight;
    const windowScroll =
      $event.srcElement.documentElement.scrollTop ||
      $event.srcElement.body.scrollTop;
    if (
      !this.showSlidInAnimation &&
      (windowHeight > 888 ||
        (windowHeight <= 888 && windowScroll / windowHeight >= 0.35))
    ) {
      this.showSlidInAnimation = true;
    }
  }

  constructor() {}

  ngOnInit() {}
}
