import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  exportTickets: Ticket[];
  workshopTickets: Ticket[];
  coporationTickets: Ticket[];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'help',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/help.svg')
    );
  }

  ngOnInit() {
    this.exportTickets = [
      {
        title: '早鳥票',
        ribbonText: '限量發售',
        price: 2000
      },
      {
        title: '一般票',
        price: 3000
      },
      {
        title: '團體票',
        price: 7500,
        desc: '三人套票'
      }
    ];

    this.workshopTickets = [
      {
        title: '入門工作坊',
        desc: '08:00-17:00',
        price: 2000
      },
      {
        title: '進階工作坊',
        desc: '08:00-12:00',
        price: 3000
      },
      {
        title: '進階工作坊',
        desc: '13:00-17:00',
        price: 3000
      }
    ];

    this.coporationTickets = [
      {
        title: '企業贊助(白金)',
        price: 25000,
        desc: '企業限定',
        tooltip: `專家演講票 5 張
        實戰工作坊 3 張
        官網 LOGO 露出
        企業人才媒合
        `
      },
      {
        title: '企業贊助(銀級)',
        price: 10000,
        desc: '企業限定',
        tooltip: `專家演講票 2 張
        實戰工作坊 2 張
        官網 LOGO 露出
        `
      }
    ]
  }
}
