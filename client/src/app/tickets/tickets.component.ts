import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './ticket/ticket';
import { TranslateService } from '@ngx-translate/core';

const ticketsInfomation = {
  'zh-tw': {
    exportTickets: [
      {
        title: '早鳥票',
        ribbonText: '限量發售',
        price: 2000,
        tooltip: `限量 50 張`
      },
      {
        title: '一般票',
        price: 2500
      },
      {
        title: '團體票',
        price: 6400,
        desc: '三人套票'
      }
    ],
    workshopTickets: [
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
    ],
    coporationTickets: [
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
        price: 12000,
        desc: '企業限定',
        tooltip: `專家演講票 2 張
        實戰工作坊 2 張
        官網 LOGO 露出
        `
      }
    ]
  },
  en: {
    exportTickets: [
      {
        title: 'Early Bird',
        ribbonText: 'Limited',
        price: 2000,
        tooltip: `50 Tickets Only`
      },
      {
        title: 'General',
        price: 2500
      },
      {
        title: 'Group Deal',
        price: 6400,
        desc: 'Triple Tickets'
      }
    ],
    workshopTickets: [
      {
        title: 'Basic',
        desc: '08:00-17:00',
        price: 2000
      },
      {
        title: 'Advanced',
        desc: '08:00-12:00',
        price: 3000
      },
      {
        title: 'Advanced',
        desc: '13:00-17:00',
        price: 3000
      }
    ],
    coporationTickets: [
      {
        title: 'PLATINUM',
        price: 25000,
        desc: '',
        tooltip: `5 Session Tickets
        3 Workshop Tickets
        Coop's Logo expose
        企業人才媒合
        `
      },
      {
        title: 'SILVER',
        price: 12000,
        desc: '',
        tooltip: `2 Session Tickets
        2 Workshop Tickets
        Coop's Logo expose
        `
      }
    ]
  }
};

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  currentLang: string;
  exportTickets: Ticket[];
  workshopTickets: Ticket[];
  coporationTickets: Ticket[];
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private translateService: TranslateService
  ) {
    this.currentLang = translateService.currentLang;
    iconRegistry.addSvgIcon(
      'help',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/help.svg')
    );
  }

  ngOnInit() {
    this.exportTickets = ticketsInfomation[this.currentLang].exportTickets;
    this.workshopTickets = ticketsInfomation[this.currentLang].workshopTickets;
    this.coporationTickets =
      ticketsInfomation[this.currentLang].coporationTickets;
  }
}
