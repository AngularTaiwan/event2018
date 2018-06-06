import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { PriceModule } from './price/price.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SharedModule } from './shared/shared.module';
import { SpeakersModule } from './speakers/speakers.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { IntroComponent } from './intro/intro.component';
import { LocationComponent } from './location/location.component';
@NgModule({
  declarations: [AppComponent, TicketsComponent, TicketComponent, IntroComponent, LocationComponent],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    PriceModule,
    ScheduleModule,
    SpeakersModule,

    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
