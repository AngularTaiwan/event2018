import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
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

@NgModule({
  declarations: [AppComponent],
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
