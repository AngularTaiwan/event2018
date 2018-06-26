import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from './ticket';
declare const bowser: any;
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  isIE: boolean;
  @Input() ticket: Ticket;

  constructor() {}

  ngOnInit() {
    if (bowser.msie || bowser.msedge) {
      this.isIE = true;
    }
  }

}
