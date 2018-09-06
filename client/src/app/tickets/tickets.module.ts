import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule.forChild()],
  declarations: [TicketsComponent, TicketComponent],
  exports: [TicketsComponent, TicketComponent]
})
export class TicketsModule {}
