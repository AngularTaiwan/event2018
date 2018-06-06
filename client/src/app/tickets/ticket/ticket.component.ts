import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  sectionTime= '09:00-15:30';
  sectionName = '入門工作坊';
  sectionPrice = 6666;
  constructor() { }

  ngOnInit() {
  }

}
