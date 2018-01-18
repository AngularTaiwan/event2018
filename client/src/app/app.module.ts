import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './contact/contact.module';
import { PriceModule } from './price/price.module';
import { ScheduleModule } from './schedule/schedule.module';
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
 
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
